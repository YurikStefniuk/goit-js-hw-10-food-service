import menuElements from './menu.json';
import cardTemplate from './templates/template.hbs';

const menuList = document.querySelector('.js-menu');
const checkbox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
checkbox.addEventListener('change', onChangeTheme);
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

function onChangeTheme(e) {
  e.preventDefault();
  if (e.target === checkbox) {
    body.classList.toggle(Theme.LIGHT);
    body.classList.toggle(Theme.DARK);
  }
  onCheckClass();
}

function onCheckClass(e) {
  const lightTheme = body.classList.contains(Theme.LIGHT);
  const darkTheme = body.classList.contains(Theme.DARK);
  if (lightTheme) {
    localStorage.setItem('theme', Theme.LIGHT);
  }
  if (darkTheme) {
    localStorage.setItem('theme', Theme.DARK);
  }
}
const checkTheme = () => {
  const color = localStorage.getItem('theme');
  if (color === Theme.DARK) {
    checkbox.checked = true;
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
  }
}
checkTheme();
  



//  function  changeThemeColor  () {
//       if (checkbox.checked) {
//           body.classList.add(Theme.DARK)
//           body.classList.remove(Theme.LIGHT)
//           localStorage.setItem('Theme', 'dark-theme')
//     }
//     else {
//         body.classList.remove(Theme.DARK)
//           body.classList.add(Theme.LIGHT)
//           localStorage.setItem('Theme', 'light=theme')
//     }
// }

// const saveToLocalStorage = localStorage.getItem('Theme')
// if(saveToLocalStorage === Theme.DARK ) {
//     body.classList.add('dark-theme');
//     checkbox.checked = true;
// }
// else {
//     body.classList.add('light-theme')
// }
