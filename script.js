var options = {
  strings: ['Hi I\'m Jon.', 'It\'s a pleasure meeting you.', 'This website is a WIP'],
  typeSpeed: 50,
  loop: true
};

var typed = new Typed('.element', options);

var navbar = document.querySelector('.navigation');
var navigationLinks = document.querySelectorAll('.navigation a');

// navigationLinks.forEach(link => {
//   link.addEventListener('hover', () => {
//     console.log("helo");
//   });
// })

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
      navbar.classList.add('navigation-white');
      navigationLinks.forEach(link => {
        link.style.color = "black";
        link.style.boxColor = "  box-shadow: 1px 2px 5px rgba(80, 80, 80, 0.9);";
      });
    } else {
      navbar.classList.remove('navigation-white');
      navigationLinks.forEach(link => {
        link.style.backgroundColor = "transparent";
        link.style.color = "white";
      })
    }
  });
}
