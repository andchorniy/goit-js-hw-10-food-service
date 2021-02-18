import menuItems from '../menu.json'
import menuTamplate from '../templates/menu-gallery.hbs'


const markup = menuTamplate(menuItems)

const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup)