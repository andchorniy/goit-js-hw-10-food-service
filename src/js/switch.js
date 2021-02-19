const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherRef = document.querySelector('#theme-switch-toggle');

const themeFromSrorage = localStorage.getItem('theme')

if (themeFromSrorage === Theme.DARK) { 
    switcherRef.setAttribute("checked", "true")
}
if (!themeFromSrorage) { 
    localStorage.setItem('theme', Theme.LIGHT)
    document.body.classList.add(Theme.LIGHT)
}

switcherRef.addEventListener('change', () => { 
    if (localStorage.getItem('theme') === Theme.LIGHT) {
        
        document.body.classList.replace(Theme.LIGHT, Theme.DARK)
        localStorage.setItem('theme', Theme.DARK)
        
    }
    else {
        
        document.body.classList.replace(Theme.DARK, Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)

 
 }
})


