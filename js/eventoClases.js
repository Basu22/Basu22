let clase = document.querySelectorAll('.fotoClase')

  clase.forEach(function(clase) {


    clase.addEventListener('click', function(e) {
      console.log('Hiciste clic en la imagen:', e.target);
    });
    
    clase.addEventListener('mouseover', function(e) {
      clase.classList.add('entradaAnimacionClase');
      clase.classList.remove('salidaAnimacionClase');
      clase.parentNode.childNodes[3].classList.add('animacionContenidoAdicional');
      console.log(clase.parentNode.childNodes[3])
    });
  
  
    clase.addEventListener('mouseout', function(e) {
      clase.classList.add('salidaAnimacionClase');
      clase.classList.remove('entradaAnimacionClase');
    });

  });