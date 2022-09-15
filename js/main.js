import { toggleMenu, renderMobileMenu } from './mobile-menu.js';
import navScrollSpy from './nav-desktop.js';
import renderSpeakers from './speakers.js';

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', toggleMenu);
menuBtn.onclick = renderMobileMenu;
window.addEventListener('scroll', navScrollSpy);

document.addEventListener('DOMContentLoaded', renderSpeakers);
