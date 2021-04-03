const body = document.body;
const dayNight = document.getElementById('dayNight');

dayNight.addEventListener('click', function() {
    dayNight.classList.toggle('day');
    
    if (dayNight.classList.value === 'day') {
        dayNight.style.setProperty('--night-opacity', '0');
        dayNight.style.setProperty('--day-opacity', '1');
        body.classList.value = 'light-mode';
    } else {
        dayNight.style.setProperty('--night-opacity', '1');
        dayNight.style.setProperty('--day-opacity', '0');
        body.classList.value = 'dark-mode';
    }
})
