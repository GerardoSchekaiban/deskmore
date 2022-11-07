//Tag navigation
document.querySelectorAll('.tabs-controls .btn-ctrl') 
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
const openPopUpButton = document.querySelector('.btn-help');
const closePopUpButton = document.querySelector('.btn-close');

openPopUpButton.addEventListener('click', () => {
    const popUp = document.querySelector('.popup.help');
    openModal(popUp);
})

closePopUpButton.addEventListener('click', () => {
    const popUp = document.querySelector('.popup.help');
    closeModal(popUp);
})

function openModal(popUp){
    if (popUp == null) return
    popUp.classList.add('active');
}

function closeModal(popUp){
    if (popUp == null) return
    popUp.classList.remove('active');
}