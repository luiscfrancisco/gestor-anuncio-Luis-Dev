  const trigger = document.getElementById('profileTrigger');
  const dialog  = document.getElementById('profileDialog');

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    dialog.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    if (!dialog.contains(e.target) && e.target !== trigger) {
      dialog.classList.remove('open');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') dialog.classList.remove('open');
  });