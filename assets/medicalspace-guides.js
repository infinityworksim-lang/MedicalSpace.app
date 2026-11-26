(() => {
 const language=document.getElementById('guide-language');
 language?.addEventListener('change',()=>location.assign(language.value));
 const dialog=document.getElementById('guide-image-dialog'),image=document.getElementById('guide-dialog-image'),original=document.getElementById('guide-original-image'),close=document.getElementById('guide-close-image'); let trigger;
 document.querySelectorAll('[data-guide-image]').forEach(link=>link.addEventListener('click',event=>{
 if(!dialog?.showModal||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
 event.preventDefault();trigger=link;image.src=link.href;image.alt=link.querySelector('img').alt;original.href=link.href;dialog.showModal();close.focus();
 }));close?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('close',()=>trigger?.focus());
 dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 const download=window.MedicalSpaceConfig?.downloadUrl;
 if(download)document.querySelectorAll('[data-download-link]').forEach(link=>link.href=download);
})();
