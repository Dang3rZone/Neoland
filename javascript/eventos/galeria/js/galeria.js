let imagen = document.querySelector('.galeria img');
let buttons = document.querySelectorAll('.galeria button');
let numberImg = 1;
const numberTotalImg = 3;

for (let button of buttons) {
    button.addEventListener('click', eventImg);
}

function eventImg(event) {
    let myButton = event.target.dataset.boton;

    if (numberImg >= numberTotalImg && myButton == "next") {
        numberImg = 1;
    } else if (numberImg <= 1 && myButton == "prev") {
        numberImg = numberTotalImg;
    } else if (myButton == 'next') {
        numberImg++;
    } else if (myButton == 'prev') {
        numberImg--
    }
    changeImg(numberImg);
}

function changeImg(pImgNumber) {
    imagen.src = `images/imagen_${pImgNumber}.jpg`
}
