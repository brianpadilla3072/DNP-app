const verInfoDevocional= (id) =>{
    let idUsuario= id;
    let ObjectDevocionalesP = window.ObjectDevocionales;
    document.getElementById("devocionalesList").style.display="none";
    document.getElementById("blockDevocionalesList").style.display= "block";
    ObjectDevocionalesP.forEach(element => {
        if(element.id === idUsuario){
            document.getElementById('blockDevocionalesList').innerHTML = `<div class=" col-lg-12 col-md-12 item mt-md-0 mt-3 date">
            <button id="" class="btn btn-primari dateNum " onclick="blockDevocionalesList()"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
              </svg></button>
            
                <div class="p-meta-info dateInfo ">
                    <a href="#img" class="post-img-anchor-content">
                        <img src="img/a5.jpg" alt=""
                            class="post-img radius-img img-fluid" />
                    </a>
                    <h1 href="#url " id="post-img-anchor-content-teto">${element.autor}</h1>
                    
                </div>
             
        </div> 
        <div class="col-lg-12 col-md-12 item mt-md-0 mt-3 date">
            <h1 class="col-xs-12">${element.name}</h1>
            <p class="col-xs-12">${element.texto}<p>
        </div>`;
        }
    });
}

const blockDevocionalesList=() =>{
    document.getElementById("blockDevocionalesList").style.display="none";
    document.getElementById("devocionalesList").style.display="block";

}


