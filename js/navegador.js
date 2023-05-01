document.body.onload = addNavegador;

function addNavegador(){
    let header = document.querySelector('header');
    
    let seccion_logo = document.createElement('section');
    seccion_logo.classList.add('logo');
    
    let a_logo = document.createElement('a');
    a_logo.href = "../index.html"
    let img_logo = document.createElement('img')
    img_logo.src = "/img/logos/Celeste Mobile sin fondo.png"

    header.appendChild(seccion_logo).appendChild(a_logo).appendChild(img_logo)
     //fin logo navegador

     let iconoNav = document.createElement('section');
     iconoNav.classList.add('iconoNav')

     header.appendChild(iconoNav)
    //fin iconoNav navegador

    let nav = document.createElement('nav');
    nav.classList.add('nav');

    let navContenido = document.createElement('ul');
    navContenido.classList.add('navContenido');

    let li_clase = document.createElement('li')
    let li_unete = document.createElement('li')
    
    let a_li_clases = document.createElement('a')
    a_li_clases.href = 'clases.html'
    a_li_clases.text = 'Clases'

    let a_li_unite = document.createElement('a')
    a_li_unite.href = 'unete.html'
    a_li_unite.text = 'Unite al Equipo'

    header.appendChild(nav).appendChild(navContenido).appendChild(li_clase).appendChild(a_li_clases)
    header.appendChild(nav).appendChild(navContenido).appendChild(li_unete).appendChild(a_li_unite)

    console.log(window.location)
}

addNavegador()


/*      <section class="logo">
            <a href="#">
                <img src="./img/logos/Celeste Mobile sin fondo.png" alt="">
            </a>
        </section>
        <section class="iconoNav">
        </section>
        <nav class="nav">
            <ul class="navContenido">
                <li><a href="./pages/clases.html">Clases</a></li>
                <li><a href="./pages/unete.html">Unite al Equipo</a></li>
                <li><a href="./pages/contactenos.html">Contacto</a></li>
            </ul>
        </nav> */