// 1. Mobile menu: open and close with the ☰ button
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

// 2. Wheel: clicking a part highlights it and shows what you picked
const picked = document.getElementById('picked');
document.querySelectorAll('.seg').forEach((seg) => {
  seg.addEventListener('click', () => {
    document.querySelectorAll('.seg').forEach((s) => s.classList.remove('on'));
    seg.classList.add('on');
    picked.textContent = 'You picked: ' + seg.dataset.pick;
  });
});

// 3. Nav links: mark the clicked one as active
document.querySelectorAll('#menu a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#menu a').forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
    menu.classList.remove('open');
  });
});
