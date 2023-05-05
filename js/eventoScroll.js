const containerMV1 = document.querySelector('.contenedorMV1');
const imageMV1 = document.querySelector('.contenedorMV1 img');
const imageMV2 = document.querySelector('.contenedorMV2 img');

const containerP1 = document.querySelector('.contenedorP1');
const imageP1 = document.querySelector('.contenedorP1 img');
const imageP2 = document.querySelector('.contenedorP2 img');

window.addEventListener('scroll', function() {
  const containerTop = containerMV1.getBoundingClientRect().top;
  const containerBottom = containerMV1.getBoundingClientRect().bottom;


  if (containerTop < window.innerHeight && containerBottom > 0) {
    imageMV1.style.transition = 'all 2s';
    imageMV1.style.transform = 'translateY(0%)';
    imageMV1.style.opacity = "1"
    imageMV2.style.transition = 'all 2s';
    imageMV2.style.transform = 'translateY(0%)';
    imageMV2.style.opacity = "1"
  } else {
    imageMV1.style.transition = 'all 2s';
    imageMV1.style.transform = 'translateY(15%)';
    imageMV1.style.opacity = "0"
    imageMV2.style.transition = 'all 2s';
    imageMV2.style.transform = 'translateY(15%)';
    imageMV2.style.opacity = "0"
  }
});

window.addEventListener('scroll', function() {
  const containerTop = containerP1.getBoundingClientRect().top;
  const containerBottom = containerP1.getBoundingClientRect().bottom;

  if (containerTop < window.innerHeight && containerBottom > 0) {
    imageP1.style.transition = 'all 2s';
    imageP1.style.transform = 'translateX(0%)';
    imageP1.style.opacity = "1"
    imageP2.style.transition = 'all 2s';
    imageP2.style.transform = 'translateX(0%)';
    imageP2.style.opacity = "1"
  } else {
    imageP1.style.transition = 'all 2s';
    imageP1.style.transform = 'translateX(15%)';
    imageP1.style.opacity = "0"
    imageP2.style.transition = 'all 2s';
    imageP2.style.transform = 'translateX(15%)';
    imageP2.style.opacity = "0"
  }
});