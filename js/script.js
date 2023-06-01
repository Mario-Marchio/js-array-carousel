const leftButton = document.getElementById(`before`);
const rightButton = document.getElementById(`after`);

const pics = document.querySelector(`.pics`);

const images = [`img/sfondo1.jpg`,`img/sfondo2.jpg`,`img/sfondo3.jpg`,`img/sfondo4.jpg`,`img/sfondo5.jpg`,]

let img = ``;

for(let i = 0 ; i < images.length; i++){
    img += `<img src="${images[i]}">`;
}

pics.innerHTML = img ;

const pic = document.querySelectorAll(`img`);

let actualIndex = 0;

pic[actualIndex].classList.add(`active`)


leftButton.addEventListener(`click`, function(){
    
    pic[actualIndex].classList.remove(`active`);

    actualIndex--;

    pic[actualIndex].classList.add(`active`);

});

rightButton.addEventListener(`click`, function(){
    
    pic[actualIndex].classList.remove(`active`);

    actualIndex++;

    pic[actualIndex].classList.add(`active`);
});