let activo = 0
let header = document.querySelector("header")
let eventoMenu = document.querySelector(".navContenido");
let iconoHamb = document.querySelector(".iconoNav")

iconoHamb.addEventListener("click",unClic);

function unClic(){
    if (activo==0){
        iconoHamb.style.backgroundImage = 'url(./icn/cross_menu.png)';
        eventoMenu.style.left = '10%';
        eventoMenu.style.transition = 'left 1s';
        header.style.backgroundColor = 'rgba(0,0,0,0.5)';
        header.style.transition = 'background-color 2s';
        activo = 1
    }else{
        iconoHamb.style.backgroundImage = 'url(./icn/mobile_menu.png)';
        eventoMenu.style.left = '-50%'
        eventoMenu.style.transition = 'left 1s' 
        header.style.removeProperty('background-color')
        activo = 0
    }
}


