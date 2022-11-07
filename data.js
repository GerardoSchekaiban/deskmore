const inpSit = document.getElementById('inpSit');
const inpStand = document.getElementById('inpStand');
const inpInclOne = document.getElementById('inpInclOne');
const inpInclTwo = document.getElementById('inpInclTwo');
const inpRem = document.getElementById('inpRem');
const inpSave = document.getElementById('inpSave');

inpSave.onclick = function(){
    const sit = inpSit.value;
    const stand = inpStand.value;
    const inclOne = inpInclOne.value;
    const inclTwo = inpInclTwo.value;
    const reminder = inpRem.value;


    console.log(sit);
    console.log(stand);

    if(sit && stand){
        localStorage.setItem("Sit", sit);
        localStorage.setItem("Stand", stand);
    }

}