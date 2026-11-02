/** Deterministic financial illustrations. No persistence, network requests, or recommendations. */
export type RawMoney = string | number;
export interface RawInputs {
 income:RawMoney; expenses:RawMoney; obligations:RawMoney; existingSavingsGoal:RawMoney;
 purchasePrice:RawMoney; installmentCount:number; totalPayable?:RawMoney | null;
 additionalMonthlySavings:RawMoney; earmarkedSavings?:RawMoney;
}
export interface ValidatedInputs {
 income:number; expenses:number; obligations:number; existingSavingsGoal:number;
 purchasePrice:number; installmentCount:number; totalPayable:number|null;
 additionalMonthlySavings:number; earmarkedSavings:number;
}
export type Result = {ok:true; value:Comparison} | {ok:false; errors:Record<string,string>};
export interface Comparison {
 baselineCentavos:number;
 buyNow:{outOfBudgetCostCentavos:number; remainderCentavos:number};
 installments:{complete:false; reason:string}|{complete:true; monthlyPaymentsCentavos:number[]; financingCostCentavos:number; monthlyRemaindersCentavos:number[]; totalPayableCentavos:number};
 waitAndSave:{remainingTargetCentavos:number; months:number|null; monthlyRemainderCentavos:number; alreadyFunded:boolean};
 assumptions:string[];
 decisionMadeBy:'user';
}
const MAX_CENTAVOS=1_000_000_000_00; // MXN 1 billion
function moneyToCentavos(value:RawMoney):number|null {
 const s=String(value).trim();
 if(!/^(?:\d+)(?:\.\d{1,2})?$/.test(s))return null;
 const [whole,decimal='']=s.split('.');
 const n=Number(whole)*100+Number(decimal.padEnd(2,'0'));
 return Number.isSafeInteger(n)&&n>=0&&n<=MAX_CENTAVOS?n:null;
}
export function validateInputs(raw:RawInputs):{ok:true;value:ValidatedInputs}|{ok:false;errors:Record<string,string>} {
 const errors:Record<string,string>={};
 const parse=(key:keyof RawInputs,required=true):number|null=>{
  const v=raw[key];
  if((v===undefined||v===null||v==='')&&!required)return null;
  const cents=moneyToCentavos(v as RawMoney);
  if(cents===null)errors[key]='Introduce un monto válido, no negativo y con máximo dos decimales.';
  return cents;
 };
 const income=parse('income'),expenses=parse('expenses'),obligations=parse('obligations'),existingSavingsGoal=parse('existingSavingsGoal');
 const purchasePrice=parse('purchasePrice'),additionalMonthlySavings=parse('additionalMonthlySavings');
 const earmarkedSavings=raw.earmarkedSavings===undefined?0:parse('earmarkedSavings');
 const totalPayable=parse('totalPayable',false);
 const installmentCount=raw.installmentCount;
 if(!Number.isSafeInteger(installmentCount)||installmentCount<=0||installmentCount>600)errors.installmentCount='El plazo debe ser un entero entre 1 y 600 meses.';
 if(purchasePrice!==null&&earmarkedSavings!==null&&earmarkedSavings>purchasePrice)errors.earmarkedSavings='El ahorro destinado no puede superar el precio.';
 if(totalPayable!==null&&purchasePrice!==null&&totalPayable<purchasePrice)errors.totalPayable='El costo total debe ser igual o mayor que el precio.';
 if(Object.keys(errors).length)return {ok:false,errors};
 return {ok:true,value:{income:income!,expenses:expenses!,obligations:obligations!,existingSavingsGoal:existingSavingsGoal!,purchasePrice:purchasePrice!,installmentCount,totalPayable,additionalMonthlySavings:additionalMonthlySavings!,earmarkedSavings:earmarkedSavings!}};
}
export function comparePurchases(raw:RawInputs):Result {
 const v=validateInputs(raw);if(!v.ok)return v;
 const x=v.value;
 const B=x.income-x.expenses-x.obligations-x.existingSavingsGoal;
 const target=Math.max(0,x.purchasePrice-x.earmarkedSavings);
 const installment=x.totalPayable===null?{complete:false as const,reason:'Costo total no verificado; introduce el total a pagar.'}:(()=>{
  const base=Math.floor(x.totalPayable!/x.installmentCount);
  const payments=Array.from({length:x.installmentCount},(_,i)=>i===x.installmentCount-1?x.totalPayable!-base*(x.installmentCount-1):base);
  return {complete:true as const,monthlyPaymentsCentavos:payments,monthlyRemaindersCentavos:payments.map(p=>B-p),financingCostCentavos:x.totalPayable!-x.purchasePrice,totalPayableCentavos:x.totalPayable!};
 })();
 return {ok:true,value:{baselineCentavos:B,buyNow:{outOfBudgetCostCentavos:target,remainderCentavos:B-target},installments:installment,
 waitAndSave:{remainingTargetCentavos:target,months:target===0?0:x.additionalMonthlySavings===0?null:Math.ceil(target/x.additionalMonthlySavings),monthlyRemainderCentavos:B-x.additionalMonthlySavings,alreadyFunded:target===0},
 assumptions:['Los ingresos y gastos mensuales se mantienen constantes.','Los montos y condiciones del financiamiento son proporcionados por la persona usuaria y no han sido verificados.','No se incluyen cambios futuros de precio, inflación ni rendimientos de ahorro.','El ahorro adicional es independiente de la meta de ahorro existente.'],decisionMadeBy:'user'}};
}
export function formatMXN(cents:number):string {return new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(cents/100)}
