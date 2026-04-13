document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.menu-toggle');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('is-active');
    });
  }

  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navbar.classList.contains('is-active')) {
      navbar.classList.remove('is-active');
    }
  });
});
