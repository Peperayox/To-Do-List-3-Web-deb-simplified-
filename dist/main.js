(()=>{const t=document.querySelector("[data-lists]"),e=document.querySelector("[data-new-list-form]"),n=document.querySelector("[data-new-list-input]"),a=document.querySelector("[data-delete-list-button]"),l=document.querySelector("[data-list-display-container]"),i=document.querySelector("[data-list-title]"),s=document.querySelector("[data-list-count]"),d=document.querySelector("[data-tasks]"),o=document.getElementById("task-template"),c=document.querySelector("[data-new-task-form]"),r=document.querySelector("[data-new-task-input]"),u=document.querySelector("[data-clear-complete-tasks-button]"),m="task.lists",f="task.selectedListId";let p=JSON.parse(localStorage.getItem(m))||[],k=localStorage.getItem(f);function S(){y(),g()}function y(){localStorage.setItem(m,JSON.stringify(p)),localStorage.setItem(f,k)}function g(){h(t),p.forEach((e=>{const n=document.createElement("li");n.dataset.listId=e.id,n.classList.add("list-name"),n.innerText=e.name,e.id===k&&n.classList.add("active-list"),t.appendChild(n)}));const e=p.find((t=>t.id===k));null==k?l.style.display="none":(l.style.display="",i.innerText=e.name,v(e),h(d),function(t){t.tasks.forEach((t=>{const e=document.importNode(o.content,!0),n=e.querySelector("input"),a=e.querySelector("label");n.id=t.id,n.checked=t.complete,a.htmlFor=t.id,a.append(t.name),d.appendChild(e)}))}(e))}function v(t){const e=t.tasks.filter((t=>!t.complete)).length,n=1===e?"task":"tasks";s.innerText=`${e} ${n} remaining`}function h(t){for(;t.firstChild;)t.removeChild(t.firstChild)}t.addEventListener("click",(t=>{"li"===t.target.tagName.toLowerCase()&&(k=t.target.dataset.listId,S())})),d.addEventListener("click",(t=>{if("input"===t.target.tagName.toLowerCase()){const e=p.find((t=>t.id===k));e.tasks.find((e=>e.id===t.target.id)).complete=t.target.checked,y(),v(e)}})),u.addEventListener("click",(t=>{const e=p.find((t=>t.id===k));e.tasks=e.tasks.filter((t=>!t.complete)),S()})),a.addEventListener("click",(t=>{p=p.filter((t=>t.id!==k)),k=null,S()})),e.addEventListener("submit",(t=>{t.preventDefault();const e=n.value;if(null==e||""===e)return;const a=(l=e,{id:Date.now().toString(),name:l,tasks:[]});var l;n.value=null,p.push(a),S()})),c.addEventListener("submit",(t=>{t.preventDefault();const e=r.value;if(null==e||""===e)return;const n=(a=e,{id:Date.now().toString(),name:a,complete:!1});var a;r.value=null,p.find((t=>t.id===k)).tasks.push(n),S()})),g()})();