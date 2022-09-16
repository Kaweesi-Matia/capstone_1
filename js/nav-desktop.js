const navScrollSpy = () => {
  if (window.innerWidth >= 768) {
    const secionAll = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY;
    secionAll.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 200;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(
        `.nav-bar li a[href*=${sectionId}]`,
      );

      if (scrollPos > sectionTop && scrollPos <= sectionTop + sectionHeight) {
        navLink.classList.add('active-link');
      } else navLink.classList.remove('active-link');
    });

    const header = document.getElementById('about');
    if (header) {
      const headerHeight = header.offsetHeight;
      const headerTop = header.offsetTop - 200;
      const headerId = header.id;
      const navLink = document.querySelector(
        `.nav-bar li a[href*=${headerId}]`,
      );

      if (scrollPos > headerTop && scrollPos <= headerTop + headerHeight) {
        navLink.classList.add('active-link');
      } else navLink.classList.remove('active-link');
    }
  }
};
export default navScrollSpy;
