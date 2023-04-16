
const session = {
    user: "Suzuki",
    id: "white",
    log: "false"
}

window.localStorage.setItem('session', JSON.stringify(session));
var ses = JSON.parse(window.localStorage.getItem('session'));
const validarSession = () => {
    console.log(ses.log);
    if (ses.log === "false") {
        
        document.getElementById('iniciarSesion').innerHTML = `
        <section id="iniciar" class="vh-100 bg-image  row m-auto ">
            <br>
            <br>    
            <div class="mask d-flex align-items-center h-100 ">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center  h-100">
                        <div  class="col-xs-12 col-md-9 col-lg-9 col-xl-8 social-login ">
                            <button id="btnIniciar" class="btn btnActive btn-registrar col-xs-6 col-md-4">Iniciar</button>
                            <button id="btnRegistrar" class="btn  btn-registrar col-xs-6 col-md-4">Registrar</button>
                        </div>
                        <div  class="col-xs-12 col-md-9 col-lg-9 col-xl-8 ">

                            <div  id="pnlIniciar" class="card" style="border-radius: 15px;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center text-color mb-5">Iniciar Sesion</h2>
                                    
                                        <form id="formIniciar" > 
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Exampleg">Correo
                                                    Electronico </label>
                                                <input type="email" name="correoIniciar" id="correoIniciar"
                                                    class="form-control form-control-lg" />
                                            </div>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Exampleg">Contraseña</label>
                                                <input type="password" name="passIniciar" id="passIniciar"
                                                    class="form-control form-control-lg" />
                                            </div>

                                            <div class="d-flex justify-content-center">
                                                <button   id="iniciarUser" class="btn-registrar"> Iniciar </button>
                                            </div>

                                        </form>                    
                                    <div class="social-icons">
                                        <p class="continue"><span>Or</span></p>
                                        <div class="social-login">
                                            <a href="#facebook">
                                                <div class="facebook">
                                                    <span class="fa fa-facebook" aria-hidden="true"></span>

                                                </div>
                                            </a>
                                            <a href="#google">
                                                <div class="google">
                                                    <span class="fa fa-google-plus" aria-hidden="true"></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div id="pnlRegistrar" class="card" style="border-radius: 15px;">

                                <div class="card-body p-5">
                                        <h2 class="text-uppercase text-center text-color mb-5">Crear Cuenta</h2>

                                        <form id="formRegistrar" action="http://localhost:4000/API/user/registrar" method="POST" enctype="application/x-www-form-urlencoded">
                                       

                                            <div class="form-outline mb-4">
                                            <label class="form-label" for="form3Example1cg">Nombre</label>
                                            <input type="text"  name="nombreRegistrar" id="nombreRegistrar"
                                                    class="form-control form-control-lg" />
                                            </div>

                                            <div class="form-outline mb-4">
                                            <label class="form-label" for="form3Example3cg">Correo
                                                    Electronico</label>
                                            <input type="email" name="correoRegistrar" id="correoRegistrar"
                                                    class="form-control form-control-lg" />
                                            </div>
                                            <div class="form-outline mb-4">
                                            <label class="form-label" for="form3Example1cg">Fecha de
                                                    Nacimiento</label>
                                                    <input class="form-control" name="fechaRegistrar" date="timepicker" type="date"
                                                    id="fechaRegistrar"  />
                                            </div>

                                            <div class="form-outline mb-4">
                                            <label class="form-label" for="form3Example4cg">Contraseña</label>
                                            <input type="password" name="passRegistrar" id="passRegistrar"
                                                    class="form-control form-control-lg" />
                                            </div>

                                            <div class="form-check d-flex justify-content-center mb-5">
                                            <label class="form-check-label" for="form2Example3g"> Estoy de acuerdo
                                                    con todas las declaraciones en <a href="#!"
                                                        class="text-color"><u>Terminos y condiciones</u></a>
                                                    
                                            </label>
                                            </div>

                                            <div class="d-flex justify-content-center">
                                                <button   id="registrarUser" class=" btn-registrar"> Registrar </button>
                                            </div>

                                            </form>

                                </div>
                            </div>
                     
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
          `;
          //  <form id="formIniciar" action="http://localhost:4000/API/user/iniciar" method="GET" enctype="application/x-www-form-urlencoded"> 
        const iniciarUser =  ()=>{
            try{
                const $formIniciar = document.querySelector("#formIniciar")
                const $formDatai = new FormData($formIniciar);
                const resp =  fetch("http://localhost:4000/API/user/iniciar",{
                    method : "GET",
                    body : $formDatai
                });//url
            }catch{
                console.log(err);
            }

        }
        let inici= document.querySelector("#iniciarUser")
        inici.addEventListener("submit", ()=>{
            iniciarUser();
            console.log("reg")
        });
        const registrarUser = async () => {
            try {
                const $formRegistrar = document.querySelector("#formRegistrar")
                const $formData = new FormData($formRegistrar);
                const resp = await fetch("http://localhost:4000/API/user/registrar",{
                    method : "POST",
                    body : $formData
                });//url
                if (res.status === 200) {
                    let objg = await res.json();// Variable global
                    console.log(objg);
                    
                }
            } catch (err) {
                console.log(err);
            }
        }
        let regist= document.querySelector("#registrarUser")
        regist.addEventListener("submit", ()=>{
            registrarUser();
        });
       
        let btnIniciar = document.getElementById("btnIniciar");
        let btnRegistrar = document.getElementById("btnRegistrar");
        let pnlRegistrar = document.getElementById("pnlRegistrar");
        let pnlIniciar = document.getElementById("pnlIniciar")
        btnIniciar.onclick = function(){
            pnlRegistrar.style.display= "none";
            btnRegistrar.classList.remove('btnActive');
            btnIniciar.classList.add('btnActive');
            pnlIniciar.classList.add('pnlIniciar');
            pnlIniciar.style.display="block";  
        } 
        btnRegistrar.onclick = function(){
            pnlIniciar.style.display= "none";
            btnIniciar.classList.remove('btnActive');
            btnRegistrar.classList.add('btnActive');
            pnlRegistrar.style.display="block";
            
        }
    } else {
        document.getElementById('usuario').innerHTML = `
        <div id="perfil" class="container">
                <div class="main-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex flex-column align-items-center text-center">
                                        <img src="img/a5.jpg" alt="Admin" class="rounded-circle p-1 bg-primary"
                                            width="110" />
                                        <div class="mt-3">
                                            <h4>John Doe</h4>
                                            <p class="text-secondary mb-1">Full Stack Developer</p>
                                            <p class="text-muted font-size-sm">
                                                Bay Area, San Francisco, CA
                                            </p>
                                            <!-- <button class="btn btn-primary">Follow</button>
                                                        <button class="btn btn-outline-primary">Message</button> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 d-none d-md-block">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Nombre Completo</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control" value="John Doe" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Correo</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control" value="john@example.com" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Telefono</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control" value="(239) 816-9029" />
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Direccion</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control"
                                                value="Bay Area, San Francisco, CA" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3"></div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="button" class="btn btn-primary px-4" value="Guardar Cambios" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="container-main">
                            <div class="accordion-container d-block d-md-none">
                                <a href="#" class="accordion-titulo" id="accordion-titulo">Editar Perfil<span
                                        id="toggle-icon" class="toggle-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="40" height="30" fill="currentColor" class="bi bi-arrow-bar-down"
                                            viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
                                        </svg></span></a>
                                <div class="accordion-content">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row mb-3">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0">Nombre Completo</h6>
                                                </div>
                                                <div class="col-sm-9 text-secondary">
                                                    <input type="text" class="form-control" value="John Doe" />
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0">Correo</h6>
                                                </div>
                                                <div class="col-sm-9 text-secondary">
                                                    <input type="text" class="form-control" value="john@example.com" />
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0">Telefono</h6>
                                                </div>
                                                <div class="col-sm-9 text-secondary">
                                                    <input type="text" class="form-control" value="(239) 816-9029" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0">Direccion</h6>
                                                </div>
                                                <div class="col-sm-9 text-secondary">
                                                    <input type="text" class="form-control"
                                                        value="Bay Area, San Francisco, CA" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-3"></div>
                                                <div class="col-sm-9 text-secondary">
                                                    <input type="button" class="btn btn-primary px-4"
                                                        value="Guardar Cambios" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-container">
                                <a href="#" class="accordion-titulo" id="accordion-titulo">Calendario<span
                                        id="toggle-icon" class="toggle-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="40" height="30" fill="currentColor" class="bi bi-arrow-bar-down"
                                            viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
                                        </svg></span></a>
                                <div class="accordion-content">
                                    <img src="http://www.abc.es/Media/201301/10/cristiano-ronaldo--644x362.jpg"
                                        alt="" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Sed ut
                                        perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo. Excepteur
                                        sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>

                            <div class="accordion-container">
                                <a href="#" class="accordion-titulo" id="accordion-titulo">Devocionales<span
                                        id="toggle-icon" class="toggle-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="40" height="30" fill="currentColor" class="bi bi-arrow-bar-down"
                                            viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
                                        </svg></span></a>
                                <div class="accordion-content">
                                    <img src="http://www.abc.es/Media/201301/10/cristiano-ronaldo--644x362.jpg"
                                        alt="" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Sed ut
                                        perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo. Excepteur
                                        sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            
    //------------------------- perfil --------------------------------------

        (function(d){
            const btn = Array.prototype.slice.apply(d.querySelectorAll('.accordion-titulo'));
            const pnl = Array.prototype.slice.apply(d.querySelectorAll('.accordion-content'));
            d.getElementById('container-main').addEventListener('click', e =>{
               if(e.target.classList.contains('accordion-titulo')){
                  let i = btn.indexOf(e.target);
                  
                  btn[i].classList.add('accordion-titulo.open');
                 
                  if(pnl[i].classList.contains('open')){
                     pnl[i].classList.remove('open');
                     pnl[i].classList.add('close');
                  }else{
                     //pnl[i].claseName = 'accordion-titulo.open open';
                     pnl[i].classList.remove('close');
                     pnl[i].classList.add('open');
                  }
               }
               
            })
         })(document);
         
    }
}


validarSession();


//------------------------- pnlCrearDevocional --------------------------------------
//input
document.querySelectorAll(".text-input").forEach((element) => {
    element.addEventListener("blur", (event) => {
        if (event.target.value != "") {
            event.target.nextElementSibling.classList.add("filled");
        } else {
            event.target.nextElementSibling.classList.remove("filled");
        }
    });
});


