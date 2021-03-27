import menuElements from './menu.json';
import cardTemplate from './templates/template.hbs';

const menuList = document.querySelector('.js-menu');
const checkbox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
checkbox.addEventListener('change', changeThemeColor);
console.dir(checkbox);
 function renderMenu (element) {
     const createMarkupMenu = element.map(elem => cardTemplate(elem)).join('');
    menuList.insertAdjacentHTML('beforeend', createMarkupMenu)
    }
renderMenu(menuElements)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

 function  changeThemeColor  () {
      if (checkbox.checked) {
          body.classList.add(Theme.DARK)
          body.classList.remove(Theme.LIGHT)
          localStorage.setItem('Theme', 'dark-theme')
    }
    else {
        body.classList.remove(Theme.DARK)
          body.classList.add(Theme.LIGHT)
          localStorage.setItem('Theme', 'light=theme')
    }
}

const saveToLocalStorage = localStorage.getItem('Theme')
if(saveToLocalStorage === Theme.DARK ) {
    body.classList.add('dark-theme');
    checkbox.checked = true;
}
else {
    body.classList.add('light-theme')
}
