//Tag navigation
document.querySelectorAll('.tabs-controls button') 
.forEach(button => {
    button.addEventListener('click',() => {

        const parent = button.parentNode; //div controls
        const grantParent = parent.parentNode; //div tabs
        const container = grantParent.querySelector('.tabs-container'); //div container

        childrenList = Array.from(parent.children); //array
        const index = childrenList.indexOf(button); //takes the position of the button clicked

        container.style.transform = `translatex(-${index * 100}%)`; //translate the container

        parent.querySelectorAll('button.active').
        forEach(activeBtn => activeBtn.classList.remove('active')); //remove class 'active'

        button.classList.add('active'); //add class 'active'
    })
})

//pop up
const openPopUpButtons = document.querySelectorAll('[data-popup-target]');
const closePopUpButtons = document.querySelectorAll('[data-close-button]');

openPopUpButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popUp = document.querySelector(button.dataset.popupTarget);
        openModal(popUp);
    })
})

closePopUpButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popUp = button.closest('.popup');
        closeModal(popUp);
    })
})

function openModal(popUp){
    if (popUp == null) return
    popUp.classList.add('active');
}

function closeModal(popUp){
    if (popUp == null) return
    popUp.classList.remove('active');
}