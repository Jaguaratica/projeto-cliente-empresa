document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.getElementById('avatar');
  const input = document.getElementById('photoInput');
  const img = document.getElementById('avatarImg');
  const icon = document.getElementById('avatarIcon');

  if (!avatar || !input || !img || !icon) return;

  avatar.addEventListener('click', () => {
    input.click();
  });

  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;

    img.src = URL.createObjectURL(file);
    img.hidden = false;
    icon.style.display = 'none';
  });
});