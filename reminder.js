setTimeout(showReminder, 5000);
const popUp = document.querySelector('.popup.reminder');

function showReminder(){
    popUp.classList.add('active');
}

const letsGoBtn = document.querySelector('.btn-go');
const noBtn = document.querySelector('.btn-no');

letsGoBtn.addEventListener('click', ()=>{
    popUp.classList.remove('active');
    setTimeout(showReminder, 5000);
})

noBtn.addEventListener('click', ()=>{
    popUp.classList.remove('active');
    setTimeout(showReminder, 5000);
})

