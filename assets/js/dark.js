const darkIcon = document.getElementById('dark-icon');
const lightIcon = document.getElementById('light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('color-theme') === 'dark' || document.documentElement.classList.contains('dark')) {
    setDark();
} else {
    setLight();
}

themeToggleBtn.addEventListener('click', function () {
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            setDark();
        } else {
            setLight();
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            setLight();
        } else {
            setDark();
        }
    }
});

function setDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
}

function setLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
}

