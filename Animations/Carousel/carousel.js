const leftNav = document.querySelector('.left > button');
const rightNav = document.querySelector('.right > button')
const firstImg = document.querySelector('.one')
const secondImg = document.querySelector('.two')

leftNav.addEventListener('click', () => {
    firstImg.style.transform = 'translatex(-100%)'
    secondImg.style.transform = 'translatex(0%)'
    rightNav.classList.remove('disabled')
    rightNav.classList.add('active')
    leftNav.classList.remove('active')
    leftNav.classList.add('disabled')
})
rightNav.addEventListener('click', () => {
    firstImg.style.transform = 'translatex(0%)'
    secondImg.style.transform = 'translatex(100%)'
    rightNav.classList.remove('active')
    rightNav.classList.add('disabled')
    leftNav.classList.remove('disabled')
    leftNav.classList.add('active')
})