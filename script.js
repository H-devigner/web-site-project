const toggleMenubutton = document.getElementById('toggle-menu-button');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav > a');
console.log(navLinks);
const menuIcon = document.querySelector('i');

const toggleMenuState = () => {
    if (menuIcon.className === 'fa fa-solid fa-bars') {
        menuIcon.className = 'fa fa-solid fa-xmark';
        nav.className = 'nav open';
        let time = 0.1;
        navLinks.forEach((item) => {
            item.style.animation = `animateNavLinks ${time += 0.1}s`;
        });
    } else {
        menuIcon.className = 'fa fa-solid fa-bars';
        nav.className = 'nav close';
        navLinks.forEach((item) => {
            item.style.animation = 'none';
        });
    }
}

toggleMenubutton.addEventListener('click', () => {
    toggleMenuState();
});
