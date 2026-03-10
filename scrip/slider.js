(function () {

  // ─── Elementos ────────────────────────────────────────────
  const hero   = document.querySelector('.hero');
  const slides = document.querySelectorAll('.hero-slide');
  const h1     = document.querySelector('.hero-content h1');

  if (!hero || !slides.length) return;

  // ─── Textos de cada slide ──────────────────────────────────
  const textos = [
    'Anuncios Online',
    'Publicidade Digital',
    'Gestão de Redes Sociais',
  ];

  // ─── Dots ─────────────────────────────────────────────────
  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'hero-dots';
  hero.appendChild(dotsWrap);

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const getDots = () => document.querySelectorAll('.hero-dot');

  // ─── Estado ───────────────────────────────────────────────
  let cur = 0;
  let timer;

  slides[0].classList.add('active');

  // ─── Troca de texto ───────────────────────────────────────
  function updateText(i) {
    h1.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    h1.style.opacity    = '0';
    h1.style.transform  = 'translateY(12px)';

    setTimeout(() => {
      h1.textContent   = textos[i] ?? h1.textContent;
      h1.style.opacity = '1';
      h1.style.transform = 'translateY(0)';
    }, 400);
  }

  // ─── Navegação ────────────────────────────────────────────
  function goTo(n) {
    // Slide a sair
    slides[cur].classList.remove('active');
    slides[cur].classList.add('leaving');
    setTimeout(() => slides[cur]?.classList.remove('leaving'), 1000);

    // Atualiza dots
    getDots().forEach(d => d.classList.remove('active'));

    // Slide a entrar
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    getDots()[cur].classList.add('active');

    updateText(cur);
  }

  // ─── Autoplay ─────────────────────────────────────────────
  function start() { timer = setInterval(() => goTo(cur + 1), 5000); }
  function stop()  { clearInterval(timer); }

  hero.addEventListener('mouseenter', stop);
  hero.addEventListener('mouseleave', start);

  updateText(0);
  start();

})();