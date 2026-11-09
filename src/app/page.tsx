'use client';
import {useState} from 'react';
import {comparePurchases,formatMXN,type RawInputs,type Comparison} from '../lib/calculations';

type Field=Exclude<keyof RawInputs,'installmentCount'>;
const initial:Record<Field,string>={income:'16000',expenses:'9000',obligations:'2000',existingSavingsGoal:'1500',purchasePrice:'9000',totalPayable:'9600',additionalMonthlySavings:'1500',earmarkedSavings:'0'};
const groups:{title:string;items:{key:Field;label:string;hint?:string}[]}[]=[
 {title:'1. Tus finanzas mensuales',items:[{key:'income',label:'Ingreso mensual'},{key:'expenses',label:'Gastos mensuales'},{key:'obligations',label:'Pagos a meses actuales'},{key:'existingSavingsGoal',label:'Meta de ahorro mensual actual'}]},
 {title:'2. La compra que estás considerando',items:[{key:'purchasePrice',label:'Precio del producto'},{key:'earmarkedSavings',label:'Ahorro ya destinado a esta compra',hint:'No se resta de tu meta de ahorro mensual.'},{key:'totalPayable',label:'Costo total al pagar a meses',hint:'Incluye precio, intereses y cargos. Déjalo vacío si no lo conoces.'},{key:'additionalMonthlySavings',label:'Ahorro adicional mensual para esta compra',hint:'Es independiente de tu meta de ahorro habitual.'}]}
];
function displayMonth(cents:number){return formatMXN(cents)}
export default function Home(){
 const [consent,setConsent]=useState(false),[agreed,setAgreed]=useState(false);
 const [fields,setFields]=useState(initial),[months,setMonths]=useState('6');
 const [errors,setErrors]=useState<Record<string,string>>({}),[result,setResult]=useState<Comparison|null>(null);
 const [editing,setEditing]=useState(true);
 const [exampleMode,setExampleMode]=useState(false);
 const [rating,setRating]=useState(0);
 const [feedback,setFeedback]=useState('');
 const [feedbackSent,setFeedbackSent]=useState(false);
 const [events,setEvents]=useState<string[]>([]);
 const log=(event:string)=>setEvents(previous=>[...previous,event].slice(-30));
 function showExample(){
  const r=comparePurchases({...initial,installmentCount:6});
  if(!r.ok){setErrors(r.errors);return;}
  setFields(initial);setMonths('6');setErrors({});setResult(r.value);setExampleMode(true);setEditing(false);setConsent(true);
  log('example_comparison_viewed');
 }
 function startPersonal(){setExampleMode(false);setConsent(true);setEditing(true);log('personal_form_opened');}
 function sendFeedback(){
  if(rating<1||feedback.length>500)return;
  setFeedbackSent(true);log('feedback_submitted');
 }
 function copySession(){
  const report=['CompraConsciente MX — registro local de prueba',...events.map((event,i)=>`${i+1}. ${event}`),`Calificación: ${rating || 'sin respuesta'}`,`Comentario: ${feedbackSent?feedback:'sin enviar'}`].join('\n');
  if(navigator.clipboard)void navigator.clipboard.writeText(report);
 }
 function calculate(e:React.FormEvent){e.preventDefault();const r=comparePurchases({...fields,installmentCount:Number(months),totalPayable:fields.totalPayable.trim()===''?null:fields.totalPayable});if(!r.ok){setErrors(r.errors);setResult(null);return;}setErrors({});setResult(r.value);setEditing(false);setExampleMode(false);log('personal_comparison_viewed');}
 function change(k:Field,v:string){setFields(p=>({...p,[k]:v}));setErrors(p=>({...p,[k]:''}));}
 return <main className="shell"><header className="header"><div className="brand">🛒 CompraConsciente MX</div><span className="tag">Prevenir · Explorar · Empoderar</span></header>
 <div className="container"><h1>Analiza una compra antes de decidir</h1><p className="lead">Compara tres escenarios, entiende el impacto en tu presupuesto y decide tú.</p>
 {!consent?<section className="panel consent"> <div className="notice" style={{ marginTop: 16, marginBottom: 16 }}>
  <h3>💜 ¿Cómo funciona CompraConsciente MX?</h3>
  <p>
    Descubre cómo una compra puede afectar tu presupuesto
    en tres sencillos pasos:
  </p>
  <ol>
    <li>
      <strong>Ingresa tus datos:</strong> escribe cuánto ganas,
      cuánto gastas y cuánto cuesta lo que quieres comprar.
    </li>
    <li>
      <strong>Compara tres opciones:</strong> comprar ahora,
      pagar a meses o esperar y ahorrar.
    </li>
    <li>
      <strong>Decide con más información:</strong> revisa cuánto
      dinero te quedaría en cada escenario.
    </li>
  </ol>
  <p>
    ✨ <strong>¿Solo quieres conocer la aplicación?</strong>
    Usa el botón "Probar con datos ficticios" para ver un
    ejemplo sin llenar el formulario.
  </p>
  <p>
    No necesitas hacer cálculos en Excel:
    CompraConsciente MX compara las opciones por ti.
    La decisión final siempre es tuya.
  </p>
</div><p>Para comparar opciones, escribirás montos de ingresos, gastos y compras. Esta versión realiza los cálculos en tu navegador: <strong>no guarda tus datos financieros, no los envía a una IA y no requiere cuenta.</strong></p><p>Los resultados son estimaciones basadas en los datos que tú introduces. No son una aprobación de crédito ni garantizan que una compra sea segura.</p><label className="check"><input type="checkbox" checked={agreed} onChange={e=>setAgreed(e.target.checked)}/> Comprendo cómo se usarán mis datos y acepto continuar.</label><button disabled={!agreed} onClick={startPersonal} className="primary">Continuar con mis datos</button><button type="button" className="primary" style={{marginTop:12,background:'#6846bd'}} disabled={!agreed} onClick={showExample}>Probar con datos ficticios (sin llenar campos)</button></section>:
 <>{editing?<form onSubmit={calculate} noValidate>{groups.map(group=><section className="panel" key={group.title}><h2>{group.title}</h2><div className="fields">{group.items.map(f=><label className="field" key={f.key}><span>{f.label} (MXN)</span><input inputMode="decimal" autoComplete="off" value={fields[f.key]} onChange={e=>change(f.key,e.target.value)} aria-invalid={Boolean(errors[f.key])} aria-describedby={errors[f.key]?`error-${f.key}`:undefined} placeholder="0.00"/>{f.hint&&<small>{f.hint}</small>}{errors[f.key]&&<small className="error" id={`error-${f.key}`}>{errors[f.key]}</small>}</label>)}</div><div className="fields">{group.title.startsWith('2')&&<label className="field"><span>Número de meses del financiamiento</span><input inputMode="numeric" value={months} onChange={e=>{setMonths(e.target.value);setErrors(p=>({...p,installmentCount:''}));}} aria-invalid={Boolean(errors.installmentCount)}/>{errors.installmentCount&&<small className="error">{errors.installmentCount}</small>}</label>}</div></section>)}<div className="notice">⚠️ <strong>Supuestos:</strong> ingresos y gastos constantes; confirma el costo total con el proveedor. Si tus ingresos varían, prueba también un mes de ingresos bajos.</div><button className="primary" type="submit">Comparar escenarios</button></form>:result&&<section aria-live="polite"><h2>Resultado: comparación de escenarios</h2>{exampleMode&&<div className="notice"><strong>DEMO: DATOS FICTICIOS.</strong> Estas cantidades son un ejemplo y NO representan tu situación financiera. No uses este resultado para decidir una compra real.</div>}<p>Estos resultados son cálculos, no recomendaciones.</p><div className="baseline">Tu presupuesto mensual actual: <strong>{displayMonth(result.baselineCentavos)}</strong><small>Después de gastos, pagos actuales y meta de ahorro.</small></div><article className="scenario now"><h3>🛒 Comprar ahora</h3><p>Saldo del mes de la compra: <strong>{displayMonth(result.buyNow.remainderCentavos)}</strong></p><small>Pago de {displayMonth(result.buyNow.outOfBudgetCostCentavos)} después del ahorro ya destinado a esta compra. Un saldo negativo representa un faltante.</small></article><article className="scenario installment"><h3>📅 Pagar a meses</h3>{result.installments.complete?<><p>Pago mensual: <strong>{displayMonth(result.installments.monthlyPaymentsCentavos[0])}</strong></p><p>Saldo mensual inicial: <strong>{displayMonth(result.installments.monthlyRemaindersCentavos[0])}</strong></p><p>Costo total: {displayMonth(result.installments.totalPayableCentavos)} · Cargos adicionales: {displayMonth(result.installments.financingCostCentavos)}</p><small>Si los centavos no se dividen exactamente, el último pago puede variar. Revisa el calendario y las condiciones reales.</small></>:<p>⚠️ {result.installments.reason} No es posible calcular cuotas verificables.</p>}</article><article className="scenario save"><h3>🐷 Esperar y ahorrar</h3><p>Tiempo estimado: <strong>{result.waitAndSave.months===null?'No calculable':`${result.waitAndSave.months} meses`}</strong></p><p>Saldo mensual mientras ahorras: <strong>{displayMonth(result.waitAndSave.monthlyRemainderCentavos)}</strong></p><small>{result.waitAndSave.alreadyFunded?'El ahorro destinado cubre el precio.':`Falta reunir ${displayMonth(result.waitAndSave.remainingTargetCentavos)}.`} Si el ahorro adicional es cero, no se puede estimar un plazo.</small></article><div className="notice"><strong>Supuestos y posibles incertidumbres</strong><ul>{result.assumptions.map(a=><li key={a}>{a}</li>)}</ul><p>Si tus ingresos cambian, estos resultados también pueden cambiar. Ningún saldo positivo garantiza seguridad financiera.</p></div><div className="decision"><strong>La decisión final siempre es tuya.</strong><p>Esta herramienta informa y compara; no elige por ti ni aprueba créditos.</p></div><button className="primary" onClick={()=>{setEditing(true);setExampleMode(false);log('edit_requested');}}>Modificar datos y recalcular</button>
 <section className="panel" style={{marginTop:20,padding:16}} aria-label="Opinión sobre la experiencia">
 <h2>Cuéntanos tu experiencia</h2>
 <p>¿Qué tan fácil fue usar la aplicación? (1 = difícil, 5 = muy fácil)</p>
 <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{[1,2,3,4,5].map(n=><button type="button" key={n} onClick={()=>{setRating(n);setFeedbackSent(false);}} aria-pressed={rating===n} style={{padding:'10px 14px',borderRadius:8,border:'1px solid #8b70b5',background:rating===n?'#d9c8ff':'white',color:'#211b37'}}>{n} ★</button>)}</div>
 <label className="field" style={{marginTop:12,display:'block'}}><span>¿Qué fue confuso o qué mejorarías? (opcional, máximo 500 caracteres)</span><textarea value={feedback} maxLength={500} rows={3} onChange={e=>{setFeedback(e.target.value);setFeedbackSent(false);}} style={{display:'block',width:'100%',padding:10,marginTop:8,border:'1px solid #bbb',borderRadius:8}} placeholder="No escribas ingresos, cuentas ni información personal." /></label>
 <p className="footnote">Tu respuesta se mantiene en este navegador durante esta sesión. No se envía a ningún servidor. Para documentar una prueba, copia el registro y compártelo voluntariamente con la investigadora.</p>
 <button className="primary" type="button" disabled={rating===0} onClick={sendFeedback}>Registrar mi opinión localmente</button>
 {feedbackSent&&<p role="status">Opinión registrada en esta sesión. Puedes copiarla junto con los eventos.</p>}
 <button className="primary" type="button" onClick={copySession} style={{marginTop:10,background:'#6846bd'}}>Copiar registro local de prueba</button>
 <small>Eventos registrados: {events.length}. No se registran montos financieros.</small>
 </section><p className="footnote">La descarga del resumen en PDF está prevista para el siguiente hito y aún no está disponible.</p></section>}</>}
 <footer>Sin almacenamiento de presupuestos · Registro local temporal de eventos · CompraConsciente MX</footer></div></main>
}
