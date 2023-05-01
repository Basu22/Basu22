document.body.onload = addNavegador;

function addNavegador(){
    let header = document.querySelector('header');
    
    if (window.screen.width > 720){
        header.innerHTML=
            `
            <section class="iconoNav">
            </section>
            <nav class="nav">
            <ul class="navContenido">
                <li class="navg1"><a href="clases.html">Clases</a></li>
                <section class="logo">
                    <a href="index.html">
                        <img src="/img/logos/Celeste Mobile sin fondo.png" alt="">
                    </a>
                </section>
                <li class="navg2"><a href="unete.html">Unite al Equipo</a></li>
                </ul>
            </nav>`
    } else {
        header.innerHTML=
            `<section class="logo">
                <a href="index.html">
                    <img src="/img/logos/Celeste Mobile sin fondo.png" alt="">
                </a>
            </section>
            <section class="iconoNav">
            </section>
            <nav class="nav">
                <ul class="navContenido">
                    <li><a href="clases.html">Clases</a></li>
                    <li><a href="unete.html">Unite al Equipo</a></li>
                </ul>
            </nav>`
        }
    }

addNavegador()

