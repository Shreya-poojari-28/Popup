const popupContainer = document.querySelector('.popup-container');
const button = document.querySelector('.open-btn');
const closeIcon = document.querySelector('.close-icon')
const subscribe = document.querySelector('.subscribe')

button.addEventListener('click', () => {
    popupContainer.classList.add('popup-open')
})
closeIcon.addEventListener('click', () => {
    popupContainer.classList.remove('popup-open')
})
subscribe.addEventListener('click', () => {
    popupContainer.classList.remove('popup-open')
})

