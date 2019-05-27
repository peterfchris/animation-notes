const items = [...document.getElementsByClassName('item')]
const leftNav = document.querySelector('.left')
const rightNav = document.querySelector('.right')
let currentSlide = 0

items[currentSlide].classList.add("active")

leftNav.addEventListener('click', moveLeft)
rightNav.addEventListener('click', moveRight)

function moveLeft(){
    if(currentSlide === 0){
        items[currentSlide].classList.remove("active")
        currentSlide = items.length -1
        items[currentSlide].classList.add("active")
        return
    }
    items[currentSlide].classList.remove("active")
    currentSlide--
    items[currentSlide].classList.add("active")
}
function moveRight(){
    if(currentSlide === items.length - 1){
        items[currentSlide].classList.remove("active")
        currentSlide = 0
        items[currentSlide].classList.add("active")
        return
    }
    items[currentSlide].classList.remove("active")
    currentSlide++
    items[currentSlide].classList.add("active")
}