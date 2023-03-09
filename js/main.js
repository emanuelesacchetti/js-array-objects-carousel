const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselDom = document.querySelector('#carousel');
let minContainerDom = document.querySelector('.miniaturesContainer');


for ( let i = 0; i < images.length; i++) {
    const singleImage = images[i];
    const imageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${singleImage['image']}" alt="${singleImage['title']}">
                                <div class="text">
                                    <h2>${singleImage['title']}</h2>
                                    <p>${singleImage['text']}</p>
                                </div>
                        </div>`;
    
    carouselDom.innerHTML += imageWrapper;  

    const miniatureDom = `<div class="miniature">
                                <img class="imageMini" src="${singleImage['image']}" alt="${singleImage['title']}">
                        </div>`;
    
    minContainerDom.innerHTML += miniatureDom;
}


let imagePosition = 0

let divImageWrapper = document.getElementsByClassName('image-wrapper');
divImageWrapper[imagePosition].classList.add('d-block');

let divMiniatureDom = document.getElementsByClassName('miniature');
divMiniatureDom[imagePosition].classList.add('fullOpacity');

const btnUpDom = document.querySelector('#up');
const btnDownDom = document.querySelector('#down');
const startStopDom = document.querySelector('#startStop');
const invertDom = document.querySelector('#invert');

btnDownDom.addEventListener('click', down);

btnUpDom.addEventListener('click', up)

startStopDom.addEventListener('click', function(){
            const caroselloATempo = setInterval(down, 3000);
})


function down(){
    if(imagePosition < divImageWrapper.length - 1){     //dalla 1° alla penultima img
        divImageWrapper[imagePosition].classList.remove('d-block');
        divMiniatureDom[imagePosition].classList.remove('fullOpacity');
        imagePosition++;
        divImageWrapper[imagePosition].classList.add('d-block');
        divMiniatureDom[imagePosition].classList.add('fullOpacity');

    } else if(imagePosition = divImageWrapper.length - 1){                //ultima posizione
        divImageWrapper[imagePosition].classList.remove('d-block');
        divMiniatureDom[imagePosition].classList.remove('fullOpacity');
        imagePosition = 0
        divImageWrapper[imagePosition].classList.add('d-block');
        divMiniatureDom[imagePosition].classList.add('fullOpacity');
    }
}

function up(){
    if(imagePosition > 0){                   //dalla seconda all'ultima
        divImageWrapper[imagePosition].classList.remove('d-block');
        divMiniatureDom[imagePosition].classList.remove('fullOpacity');
        imagePosition--;
        divImageWrapper[imagePosition].classList.add('d-block');
        divMiniatureDom[imagePosition].classList.add('fullOpacity');
        
    } else if(imagePosition == 0){                //la 1°
        divImageWrapper[imagePosition].classList.remove('d-block');
        divMiniatureDom[imagePosition].classList.remove('fullOpacity');
        imagePosition = divImageWrapper.length - 1
        divImageWrapper[imagePosition].classList.add('d-block');
        divMiniatureDom[imagePosition].classList.add('fullOpacity');
    }
}