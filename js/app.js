let imageSlider = document.getElementsByClassName("imageSlider"); // on recupère toutes les images dans une tableau

let etape = 0; // permet de savoir quelle image afficher

let nombreImage = imageSlider.length;

function enleverActiveImage() {
    for (let i = 0; i < nombreImage; i++) {
        imageSlider[i].classList.remove('active');
    }
}

let suivant = document.querySelector('.suivant');
let precedent = document.querySelector('.precedent');

suivant.addEventListener('click', function () {
    etape++;
    if (etape >= nombreImage) {
        etape = 0;
    }
    enleverActiveImage();
    imageSlider[etape].classList.add('active');
});


precedent.addEventListener('click', function () {
    etape--;
    if (etape < 0) {
        etape = nombreImage - 1;
    }
    enleverActiveImage();
    imageSlider[etape].classList.add('active');
});


setInterval(function () {
    etape++;
    if (etape >= nombreImage) {
        etape = 0;
    }
    enleverActiveImage();
    imageSlider[etape].classList.add('active');
}, 2000);