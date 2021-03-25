const body = document.querySelector('body');
const wrapper = document.querySelector('.dayNight');
const toggle = wrapper.querySelector('input');

if (localStorage.getItem('mode') == null) {
    localStorage.setItem('mode', 'light-mode');
}

body.classList.value = localStorage.getItem('mode');
toggle.checked = localStorage.getItem('mode') === 'light-mode' ? true : false;
wrapper.classList.remove('hidden');

toggle.addEventListener('change', () => {
    const mode = toggle.checked ? 'light-mode' : 'dark-mode';
    body.classList.value = mode;
    localStorage.setItem('mode', mode);
});
