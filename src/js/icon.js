document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.getElementById('avatar');
  const input = document.getElementById('photoInput');
  const img = document.getElementById('avatarImg');
  const icon = document.getElementById('avatarIcon');

  const headerAvatar = document.getElementById('headerAvatar');
  const headerMenu = document.getElementById('headerMenu');

  if (avatar && input && img && icon) {
    avatar.addEventListener('click', () => input.click());

    input.addEventListener('change', () => {
      const file = input.files[0];
      if (!file) return;

      const url = URL.createObjectURL(file);
      img.src = url;
      img.hidden = false;
      icon.style.display = 'none';

      if (headerAvatar) {
        headerAvatar.innerHTML = `<img src="${url}">`;
      }
    });
  }

  if (headerAvatar && headerMenu) {
    headerAvatar.addEventListener('click', (e) => {
      e.stopPropagation();

      headerMenu.style.display =
        headerMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    headerMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    document.addEventListener('click', () => {
      headerMenu.style.display = 'none';
    });
  }
});