let ball = document.querySelector('.ball');
let naughtyText = document.querySelector('.naughty');
let niceText = document.querySelector('.nice');
let body = document.querySelector('body');
ball.addEventListener('click', ()=> {
    ball.classList.toggle('right');
    naughtyText.classList.toggle('active')
    niceText.classList.toggle('active');
    body.classList.toggle('green')
})
