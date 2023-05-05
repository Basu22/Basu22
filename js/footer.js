document.body.onload = addFooter;
function addFooter(){
    let footer = document.querySelector('footer');
    
    footer.innerHTML = `        
            <section class="contenedorRedes">
                <a class="icnFace" href="https://www.facebook.com/profile.php?id=100060499196714">
                    <img src="./img/redes/facebook-circle-logo-24.png" alt="">
                </a>
                <p class="usuario_face">CELESTE ARTEDANZA</p>
                <a class="icnIg" href="https://www.instagram.com/celeste_artedanza__1162084471/">
                    <img  src="./img/redes/instagram-logo-24.png" alt="">
                </a>
                <p class="usuario_ig">@celeste_artedanza</p>
                <a class="icnWts" href="https://api.whatsapp.com/send?phone=5491162084471">
                    <img  src="./img/redes/whatsapp-logo-24.png" alt="">
                </a>
                <p class="usuario_wts">+54 9 11 6208-4471</p>
            </section>
            <section class="contenedorMapa">  
                <p>Dirección: Gabino Ezeiza 9194 - Loma Hermosa</p>
                <iframe class="mapa" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Gabino%20Ezeiza%209194+(Celeste%20-%20Arte%20y%20Danza)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </section>
            `
}

addFooter()