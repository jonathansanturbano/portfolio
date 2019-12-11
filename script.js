var options = {
  strings: ['Hi I\'m Jon.', 'It\'s a pleasure meeting you.', 'This website is a WIP'],
  typeSpeed: 50,
  loop: true
};

var typed = new Typed('.element', options);

var navbar = document.querySelector('.navigation');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
      navbar.classList.add('navigation-white');
    } else {
      navbar.classList.remove('navigation-white');
    }
  });
}
