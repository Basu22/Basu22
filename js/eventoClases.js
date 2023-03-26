let contenedorClases = document.querySelectorAll('.contenedorClase')
let claseGrid = 1

contenedorClases.forEach(function(contenedorClase){
  if (claseGrid === 1) {
    contenedorClase.style.gridArea = "c"+claseGrid;
    claseGrid ++;
  }else{
    contenedorClase.style.gridArea = "c"+claseGrid;
    claseGrid = 1;
  }


  contenedorClase.addEventListener('mouseover',function(e){
    contenedorClase.childNodes[1].classList.add('entradaAnimacionClase');
    contenedorClase.childNodes[1].classList.remove('salidaAnimacionClase');
    contenedorClase.childNodes[3].classList.remove('contenidoAdicional');
    contenedorClase.childNodes[3].classList.add('entradaContenidoAdicional');
    contenedorClase.childNodes[3].classList.remove('salidaContenidoAdicional');
  })

  contenedorClase.addEventListener('mouseout',function(e){
    contenedorClase.childNodes[1].classList.add('salidaAnimacionClase');
    contenedorClase.childNodes[1].classList.remove('entradaAnimacionClase');
    contenedorClase.childNodes[3].classList.add('salidaContenidoAdicional');
    contenedorClase.childNodes[3].classList.remove('entradaContenidoAdicional');
  })

})
