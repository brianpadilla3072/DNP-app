//-------------------  VARIABLES GLOBALES -------------------------------//
window.ObjectDevocionales = '';
window.Objectfechas = '';
window.ObjectUsuario = '';
window.PanelErrorServer = `
<svg class="m-auto col-xs-12 col-md-12 col-lg-12" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="400px" height="400px" viewBox="0 0 516.375 516.375" style="enable-background:new 0 0 516.375 516.375;"
xml:space="preserve">

<g id="clud-background">
   <rect x="248.625" y="392.062" width="19.125" height="19.125"/>
   <path d="M457.088,208.462c-9.562-47.812-51.638-84.15-103.275-84.15c-17.213,0-32.513,3.825-45.9,11.475
       c-22.949-42.075-66.937-68.85-116.662-68.85c-74.587,0-133.875,59.288-133.875,133.875c0,1.913,0,5.737,0,7.65
       C22.95,223.763,0,256.275,0,296.438c0,53.55,42.075,95.625,95.625,95.625H168.3l-34.425,57.375H382.5l-34.425-57.375h72.675
       c53.55,0,95.625-42.075,95.625-95.625C516.375,256.275,491.513,221.85,457.088,208.462z M348.075,430.312H166.388l91.8-153
       L348.075,430.312z M420.75,372.938H336.6l-78.412-133.875l-78.413,133.875h-84.15c-42.075,0-76.5-34.425-76.5-76.5
       c0-36.338,24.862-66.938,59.288-74.588C76.5,214.2,76.5,208.462,76.5,200.812c0-63.112,51.638-114.75,114.75-114.75
       c49.725,0,91.8,32.513,109.013,76.5c15.3-11.475,34.425-19.125,53.55-19.125c45.9,0,82.237,34.425,86.062,78.412
       c32.513,7.65,57.375,38.25,57.375,74.588C497.25,338.513,462.825,372.938,420.75,372.938z"/>
   <rect x="248.625" y="315.562" width="19.125" height="57.375"/>
</g>
</svg> <h1 class=" m-auto col-xs-12 col-md-12 col-lg-12 text-h1-bg bg-orange" >Error en el servidor<h1>`;



//-------------------  PEDIDOS -------------------------------//
const cargarFechas = async () => {
    try {
        const res = await fetch("http://localhost:4000/API/fechas");//url
        if (res.status === 200) {
            window.Objectfechas = await res.json();// Variable global
            let fechas = '';
            window.Objectfechas.forEach(element => {
                fechas = fechas + `
                <div class="date">
                    <div class="dateNum">
                        <h1 class="numero text-fecha">15</h1>
                        <h2 class="mes text-fecha">FEB</h2>
                    </div>
                    <div class="dateInfo">
                        <h1 class="dateTitle"></h1>
                    </div>
                </div>`;
            });
            document.getElementById('contenDate').innerHTML = fechas;

        }
    } catch (err) {
        let PanelErrorServer = window.PanelErrorServer;
        document.getElementById('inicio').innerHTML = PanelErrorServer;
    }
}

const cargarDevocionales = async () => {
    try {
        const res = await fetch("http://localhost:4000/API/devocionales");//url
        if (res.status === 200) {
            window.ObjectDevocionales = await res.json();// Variable global
            let devocionales = '';
            window.ObjectDevocionales.forEach(element => {
                devocionales = devocionales + `<div id="noneDevocionalesList" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 item mt-md-0 mt-3" onclick="verInfoDevocional(${element.id})"><div class="card"><div class="card-header p-0 position-relative"><a href="#blog-single"><img class="card-img-bottom d-block radius-image" src="img/5.jpg" alt="Card image cap"></a></div><div class="card-body p-0 blog-details"><h2 href="#blog-single" class="blog-desc">${element.name}</h2><p>${element.texto}</p><div class="p-footer mt-3"><div class="p-meta-info"><a href="#img" class="post-img-anchor"><img src="img/a5.jpg" alt="" class="post-img radius-img img-fluid" /></a><a href="#url">${element.autor}</a></div></div></div></div></div>`;
            });
            document.getElementById('devocionalesList').innerHTML = devocionales;

        }
    } catch (err) {
        let PanelErrorServer = window.PanelErrorServer;
        document.getElementById('devocionalesList').innerHTML = PanelErrorServer;
    }
}



//-------------------  load -------------------------------//

const app = document.getElementById('tabbar');
const preLoader = document.getElementById('preloader');
window.addEventListener('load', () => {
    setTimeout(function () {
        preLoader.style.display = "none";
        app.style.display = "block";
    }, 2000);
});
//-------------------  instanciar pedidos -------------------------------//
cargarDevocionales();
cargarFechas();


