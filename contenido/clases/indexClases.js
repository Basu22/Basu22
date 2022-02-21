



clases.forEach(el => {
    let art=document.createElement("article");
    art.classList.add("col-12","cajaClase");
    art.setAttribute("id",el.id)
    art.innerHTML=`<p>${el.clase}</p>`
    document.getElementById("listadoClases").appendChild(art)
    

    art.addEventListener("click",function(){
        
        articulo=document.querySelector(".cajaDetalle");
        
        if(articulo){
            articulo.remove();
            id=art.id
            clase=clases.find((item)=>item.id==id)
            let artEscucha=document.createElement("article");
            artEscucha.classList.add("row","cajaDetalle");
            artEscucha.innerHTML=   `<article class="col-6">
                                    <h1>${clase.clase}</h1>
                                    <h2>${clase.horario}</h2>
                                    </article>
                                    <article class="col-6 imgProfes">
                                    <img src="${clase.portada}" alt="">
                                    <h3>Prof. ${clase.profesor}</h3>
                                    </article>`

            document.getElementById("detalleClases").appendChild(artEscucha)
        }else{
            id=art.id
            clase=clases.find((item)=>item.id==id)
            let artEscucha=document.createElement("article");
            artEscucha.classList.add("row","cajaDetalle");
            artEscucha.innerHTML=   `<article class="col-6">
                                    <h1>${clase.clase}</h1>
                                    <h2>${clase.horario}</h2>
                                    </article>
                                    <article class="col-6 imgProfes">
                                    <img src="${clase.portada}" alt="">
                                    <h3>Prof. ${clase.profesor}</h3>
                                    </article>`
            document.getElementById("detalleClases").appendChild(artEscucha)
        }
    })

})


