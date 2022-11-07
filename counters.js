const plusHeight = document.querySelector('.plus-height');
const minusHeight = document.querySelector('.minus-height');
const numHeight = document.querySelector('.num-height');

let height = 0;

plusHeight.addEventListener('click', ()=>{
    height++;
    numHeight.innerText = height;
});

minusHeight.addEventListener('click', ()=>{
    if(height > 0){
        height--;
        numHeight.innerText = height;
    }
});

const plusIncl = document.querySelector('.plus-incl');
const minusIncl = document.querySelector('.minus-incl');
const numIncl = document.querySelector('.num-incl');

let = inclination = 0;

plusIncl.addEventListener('click', ()=>{
    inclination++;
    numIncl.innerText = inclination;
});

minusIncl.addEventListener('click', ()=>{
    if(inclination > 0){
        inclination--;
        numIncl.innerText = inclination;
    }
});
