let useDarkTheme = false;

const themeButton = document.getElementById('theme-toggle')

function toggleTheme() {
    useDarkTheme = !useDarkTheme;
    const root = document.documentElement;

    if (useDarkTheme) {
        root.style.setProperty('--bg-color', 'var(--bg-color-dark)')
        root.style.setProperty('--navbar-bg-color', 'var(--navbar-bg-color-dark)')
        root.style.setProperty('--button-bg-color', 'var(--button-bg-color-dark)')
        root.style.setProperty('--button-text-color', 'var(--button-text-color-dark)')
        root.style.setProperty('--text-color', 'var(--text-color-dark)')
        root.style.setProperty('--role-color', 'var(--role-color-dark)')
        root.style.setProperty('--description-color', 'var(--description-color-dark)')
        root.style.setProperty('--role-bg', 'var(--role-bg-dark)')
        root.style.setProperty('--accent-color', 'var(--accent-color-dark)')

        themeButton.innerHTML = '🌙'
        root.style.setProperty('--theme-bg', 'var(--theme-bg-dark)')
    }

    else {
        root.style.setProperty('--bg-color', 'var(--bg-color-light)')
        root.style.setProperty('--navbar-bg-color', 'var(--navbar-bg-color-light)')
        root.style.setProperty('--button-bg-color', 'var(--button-bg-color-light)')
        root.style.setProperty('--button-text-color', 'var(--button-text-color-light)')
        root.style.setProperty('--text-color', 'var(--text-color-light)')
        root.style.setProperty('--role-color', 'var(--role-color-light)')
        root.style.setProperty('--description-color', 'var(--description-color-light)')
        root.style.setProperty('--role-bg', 'var(--role-bg-light)')
        root.style.setProperty('--accent-color', 'var(--accent-color-light)')

        themeButton.innerHTML = '☀️'

        root.style.setProperty('--theme-bg', 'var(--theme-bg-light)')
    }
}

// document.addEventListener('mousemove', (e) => {
//     let y = e.pageY

//     let xPercent = 100 * y / window.innerHeight

//     let footerBackground = "linear-gradient( to top, var(--accent-color) " + String(100 - xPercent + 15) + "%, #ffffff"

//     document.getElementsByTagName('footer')[0].style.background = footerBackground
// })

themeButton.addEventListener('click', toggleTheme);

// Denne funksjonaliteten må deles opp i lag med css filene slik at vi har en overårdnet css slik at de felles elementene og fargene for alle sidene holder seg like
// Ting som role-color må være i egen fil så toggleTheme knappen må bindest i flere js filer etter hvert
