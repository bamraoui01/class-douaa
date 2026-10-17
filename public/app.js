'use strict';
const storageKey = 'class-douaa-completed-v1';
const validIds = new Set(window.schoolResources.map(r => r.id));
let completed = new Set();
try { const saved = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (Array.isArray(saved)) completed = new Set(saved.filter(id => validIds.has(id))); } catch (_) {}
let selected = 'Toutes';
const cards = document.getElementById('cards');
const search = document.getElementById('search');
const normalise = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function render() {
  const query = normalise(search.value.trim());
  cards.replaceChildren();
  const visible = window.schoolResources.filter(r => (selected === 'Toutes' || r.subject === selected) && normalise(r.title+' '+r.description+' '+r.id+' '+r.subject).includes(query));
  for (const r of visible) {
    const card = document.createElement('article');
    card.className = 'card' + (completed.has(r.id) ? ' completed' : '');
    card.dataset.subject = r.subject;
    const top = document.createElement('div'); top.className = 'card-top';
    const icon = document.createElement('span'); icon.className = 'icon'; icon.textContent = r.icon; icon.setAttribute('aria-hidden','true');
    const tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = r.subject+' · '+r.id;
    top.append(icon,tag);
    const title = document.createElement('h3'); title.textContent = r.title;
    const description = document.createElement('p'); description.textContent = r.description;
    const bottom = document.createElement('div'); bottom.className='card-bottom';
    const link = document.createElement('a'); link.href='documents/'+r.file+'.pdf#page='+r.page; link.target='_blank'; link.rel='noopener'; link.textContent='Ouvrir · page '+r.page+' ↗'; link.setAttribute('aria-label','Ouvrir '+r.title+', page '+r.page);
    const label = document.createElement('label'); label.className='done';
    const check = document.createElement('input'); check.type='checkbox'; check.checked=completed.has(r.id); check.setAttribute('aria-label','Marquer '+r.title+' comme terminé');
    check.addEventListener('change',()=>{ if(check.checked) completed.add(r.id); else completed.delete(r.id); card.classList.toggle('completed',check.checked); try{localStorage.setItem(storageKey,JSON.stringify([...completed]));}catch(_){document.getElementById('progress').textContent='Suivi temporaire : enregistrement indisponible';return;} updateProgress(); });
    label.append(check,document.createTextNode('Fait !')); bottom.append(link,label); card.append(top,title,description,bottom); cards.append(card);
  }
  document.getElementById('empty').hidden=visible.length>0;
  updateProgress();
}
function updateProgress(){document.getElementById('progress').textContent=completed.size+' / '+window.schoolResources.length+' activités terminées';}
document.getElementById('filters').addEventListener('click',e=>{const button=e.target.closest('button[data-filter]'); if(!button)return; selected=button.dataset.filter; document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render();});
search.addEventListener('input',render);
render();
