let near = document.querySelector(".near");
let far = document.querySelector(".far");
let earth = document.querySelector(".earth");
let size = 1;

let i = 0;
let btnMenu = document.querySelector(".menuBtn");
let menu = document.querySelector('.menuItem');

document.addEventListener("DOMContentLoaded",  function(){
    earth.style.transform =  'scale(1)';   
})


near.addEventListener('click', function(){
    size += 0.1;

    earth.style.transform =  `scale(${size} )`;
})

far.addEventListener('click', function(){
    size -= 0.1;
    earth.style.transform =  `scale(${size} )`;
})



btnMenu.addEventListener('click', function(){
  if(i == 0){
    menu.style.display = "flex";
    i--;
  }else{
    menu.style.display = "none";
    i++;
  }
})