const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)], R=document.documentElement;
const salvar=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}, ler=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
// Acessibilidade
let fs=+(ler('fs')||100);
function aplicar(){R.style.setProperty('--fs',fs+'%')}
if(ler('tema')==='escuro')R.dataset.tema='escuro';
if(ler('contraste')==='sim'){R.dataset.contraste='sim';$('#contraste').setAttribute('aria-pressed','true')}
aplicar();
$('#abrirA11y').onclick=e=>{const p=$('#painelA11y');p.hidden=!p.hidden;e.target.setAttribute('aria-expanded',!p.hidden)};
$('#tema').onclick=()=>{const e=R.dataset.tema==='escuro';e?delete R.dataset.tema:R.dataset.tema='escuro';salvar('tema',e?'claro':'escuro')};
$('#maisFonte').onclick=()=>{fs=Math.min(150,fs+10);aplicar();salvar('fs',fs)};
$('#menosFonte').onclick=()=>{fs=Math.max(80,fs-10);aplicar();salvar('fs',fs)};
$('#contraste').onclick=e=>{const on=R.dataset.contraste!=='sim';on?R.dataset.contraste='sim':delete R.dataset.contraste;e.target.setAttribute('aria-pressed',on);salvar('contraste',on?'sim':'nao')};
$('#resetA11y').onclick=()=>{fs=100;aplicar();delete R.dataset.tema;delete R.dataset.contraste;$('#contraste').setAttribute('aria-pressed','false');['tema','fs','contraste'].forEach(k=>salvar(k,''))};
// Carrossel
const sl=$$('.slide');let i=0;
const mostrar=n=>{i=(n+sl.length)%sl.length;sl.forEach((s,k)=>s.classList.toggle('ativo',k===i))};
$('#ant').onclick=()=>mostrar(i-1);$('#prox').onclick=()=>mostrar(i+1);
// Abas + busca
let cat='todos';
function filtrar(){const q=$('#busca').value.toLowerCase();let n=0;
 $$('#lista li').forEach(li=>{const ok=(cat==='todos'||li.dataset.cat===cat)&&li.textContent.toLowerCase().includes(q);li.hidden=!ok;if(ok)n++});
 $('#vazio').hidden=n>0}
$$('[role=tab]').forEach(t=>t.onclick=()=>{cat=t.dataset.cat;$$('[role=tab]').forEach(x=>x.setAttribute('aria-selected',x===t));filtrar()});
$('#busca').oninput=filtrar;
// Login
$('#formLogin').onsubmit=e=>{e.preventDefault();const em=$('#email'),se=$('#senha');
 $('#erroEmail').textContent=em.validity.valid?'':'Informe um e-mail válido.';
 $('#erroSenha').textContent=se.validity.valid?'':'A senha precisa ter ao menos 6 caracteres.';
 $('#msgLogin').textContent=em.validity.valid&&se.validity.valid?'Login simulado com sucesso! (sem servidor)':''};
// Contato
$('#formContato').onsubmit=e=>{e.preventDefault();const ok=$$('#formContato [required]').every(c=>c.validity.valid);
 $('#msgContato').textContent=ok?'Mensagem enviada (simulação). Obrigado!':'Preencha todos os campos corretamente.'};