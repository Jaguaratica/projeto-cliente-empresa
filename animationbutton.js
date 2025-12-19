const btn = document.querySelector('.hedrBtnCadast');
const icon = btn.querySelector('i');

btn.addEventListener('mouseenter', () => {
  icon.classList.remove('bi-door-closed');
  icon.classList.add('bi-door-open');
});

btn.addEventListener('mouseleave', () => {
  icon.classList.remove('bi-door-open');
  icon.classList.add('bi-door-closed');
});