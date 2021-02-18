const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
if (localStorage.theme === Theme.DARK) { 
    switcherRef.setAttribute("checked", "true")
}

bodyRef.classList.add(localStorage.theme)

switcherRef.addEventListener('change', () => { 
    if (localStorage.theme === Theme.DARK) {

        bodyRef.classList.replace(Theme.DARK, Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
    }
    else {
        bodyRef.classList.replace(Theme.LIGHT, Theme.DARK)
        localStorage.setItem('theme', Theme.DARK)
        
 }
})


