const menuBtn = document.querySelector('.menu-btn');

const toggleMenu = (e) => {
  const { target } = e;
  if (target.nodeName === 'SPAN' || target.nodeName === 'DIV') {
    menuBtn.classList.toggle('open');
  }
};

const closeMenu = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.remove('active');
  menuBtn.classList.remove('open');
  setTimeout(() => {
    mobileMenu.remove();
    const prevHomeLi = document.getElementById('homepage-link');
    if (prevHomeLi) prevHomeLi.remove();
  }, 200);
  document.body.style.overflow = 'auto';
};

function renderMobileMenu() {
  const modalOpen = menuBtn.classList.contains('open');

  const mobileMenu = document.createElement('nav');
  mobileMenu.className = 'mobile-menu';

  const navLinks = document.querySelector('.nav-bar').cloneNode(true);
  // Appending HomeLink
  const homeLi = document.createElement('li');
  homeLi.id = 'homepage-link';
  const homeLink = document.createElement('a');
  homeLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="48px" height="48px">
  <g id="surface140677373">
  <path style=" stroke:none;fill-rule:nonzero;fill:rgb(15.294118%,16.470589%,19.215687%);fill-opacity:1;" d="M 23.949219 4 C 23.632812 4.011719 23.324219 4.125 23.074219 4.324219 L 8.859375 15.519531 C 7.054688 16.941406 6 19.113281 6 21.410156 L 6 40.5 C 6 41.863281 7.136719 43 8.5 43 L 18.5 43 C 19.863281 43 21 41.863281 21 40.5 L 21 30.5 C 21 30.203125 21.203125 30 21.5 30 L 26.5 30 C 26.796875 30 27 30.203125 27 30.5 L 27 40.5 C 27 41.863281 28.136719 43 29.5 43 L 39.5 43 C 40.863281 43 42 41.863281 42 40.5 L 42 21.410156 C 42 19.113281 40.945312 16.941406 39.140625 15.519531 L 24.925781 4.324219 C 24.648438 4.101562 24.304688 3.988281 23.949219 4 Z M 24 7.410156 L 37.285156 17.875 C 38.371094 18.730469 39 20.03125 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585938 28.414062 27 26.5 27 L 21.5 27 C 19.585938 27 18 28.585938 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.03125 9.628906 18.730469 10.714844 17.875 Z M 24 7.410156 "/>
  </g>
  </svg> 
  <span>ome</span>`;
  homeLink.href = './index.html#headline';
  homeLi.appendChild(homeLink);
  navLinks.prepend(homeLi);

  navLinks.querySelector('.accronym-link').style.display = 'none';

  const links = navLinks.querySelectorAll('li');
  links.forEach((link) => {
    link.querySelector('a').classList.remove('active-link');
    link.onclick = closeMenu;
  });
  mobileMenu.appendChild(navLinks);

  document.body.style.overflow = 'hidden';

  mobileMenu.addEventListener('click', (e) => {
    const { target } = e;
    if (target.nodeName === 'NAV') {
      closeMenu();
    }
  });

  if (modalOpen) {
    document.body.prepend(mobileMenu);
    setTimeout(() => {
      mobileMenu.classList.add('active');
    }, 100);
  } else closeMenu();
}

export { renderMobileMenu, toggleMenu };
