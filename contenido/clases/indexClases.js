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
            console.log(clase.horario)
            let artEscucha=document.createElement("article");
            artEscucha.classList.add("row","cajaDetalle");
            artEscucha.innerHTML=   `<article class="col-12">
                                        <h1>${clase.clase}</h1>
                                    </article>
                                    <article class="col-5">
                                        ${clase.horario.map((h)=>`<h2>📅${h}</h2>`).join("")}
                                    </article>
                                    <article class="col-7 imgProfes">
                                        <img src="${clase.portada}" alt="">
                                    </article>
                                    <article class="col-12">
                                        <h3>Prof. ${clase.profesor}</h3>
                                    </article>`
    document.getElementById("detalleClases").appendChild(artEscucha)
        
        }else{
            id=art.id
            clase=clases.find((item)=>item.id==id)
            let artEscucha=document.createElement("article");
            artEscucha.classList.add("row","cajaDetalle");
            artEscucha.innerHTML=   `<article class="col-12">
                                        <h1>${clase.clase}</h1>
                                    </article>
                                    <article class="col-5">
                                        ${clase.horario.map((h)=>`<h2>📅${h}</h2>`).join("")}
                                    </article>
                                    <article class="col-7 imgProfes">
                                        <img src="${clase.portada}" alt="">
                                    </article>
                                    <article class="col-12">
                                        <h3>Prof. ${clase.profesor}</h3>
                                    </article>`
            document.getElementById("detalleClases").appendChild(artEscucha)
        }
    })
            
})


