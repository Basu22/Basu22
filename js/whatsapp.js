document.body.onload = addWhatsapp;

let body = document.querySelector("body");

function addWhatsapp(){
    let sectionWts = document.createElement("section");
    sectionWts.classList.add('wtsappFlotante')

    let linkWts = document.createElement('a');
    linkWts.href="https://api.whatsapp.com/send?phone=5491162084471";
    
    
    let logoWts = document.createElement("img");
    logoWts.src="../icn/Whatsapp_37229.png";
    

    sectionWts.appendChild(linkWts).appendChild(logoWts)
    

    body.insertBefore(sectionWts,null)
}

