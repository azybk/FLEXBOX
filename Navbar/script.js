const menuToggle = document.querySelector('.menu-toggle input')
const slide = document.querySelector('nav ul')

menuToggle.addEventListener('click', () => {
    slide.classList.toggle('slide')
})