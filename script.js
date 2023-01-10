const animes = document.getElementById('animes');
const gridSection = document.getElementsByClassName('grid-section');
const primeiraLi = document.querySelector('li');
const primeiraUl = document.querySelector('ul');
const linksInternos = document.querySelector('[href^="#"]');
const animesImg = document.querySelectorAll('.animes img');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');


gridSectionNode.forEach(function(item,index){

    
});

const imgs = document.querySelectorAll('img');
imgs.forEach((index,item) =>{
    console.log(index,item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
});

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item)=> {
console.log(item);
});


paragrafos.forEach((item)=> {
console.log(item.innerText);
});



const Ximgs = document.querySelectorAll('img');

Ximgs.forEach((item,index) => {
console.log(item,index);
});

let i = 0;
Ximgs.forEach( ()=> { console.log(i++);
});

imgs.forEach(()=> i++);