// var options = {
//   strings: ['Hi I\'m Jon.', 'It\'s a pleasure meeting you.', 'This website is a WIP'],
//   typeSpeed: 50,
//   loop: true
// };

// var typed = new Typed('.element', options);

var navbar = document.querySelector('.navigation');
var navigationLinks = document.querySelectorAll('.navigation-items-top');

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
        link.classList.add("navigation-items-bottom");
      });
    } else {
      navbar.classList.remove('navigation-white');
      navigationLinks.forEach(link => {
        link.style.backgroundColor = "transparent";
        link.style.color = "white";
        link.classList.remove("navigation-items-bottom");
      })
    }
  });
}

if(window.innerWidth < 541) {

  const arrow = `
                 <div class="mobile-indicator">
                  <p style="margin-bottom: 0;">
                    <span style="font-style: italic;">Pssst</span>
                    . This way
                  </p>
                  <p>👇</p>
                 </div>
                 `;
  const banner = document.querySelector('.banner');
  banner.insertAdjacentHTML('beforeend', arrow);
  window.addEventListener('scroll', () => {
    banner.lastElementChild.style.opacity = ((window.innerHeight - window.scrollY * 1.5) / window.innerHeight);
  });
}
