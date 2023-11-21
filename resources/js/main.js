const cambio_gafas = document.getElementById("cambio_gafas");

cambio_gafas.addEventListener("mouseover", () => {

    cambio_gafas.src = "/images/jovenPrincipal.png";
});
cambio_gafas.addEventListener("mouseout", () => {

    cambio_gafas.src = "/images/jovenPrincipal-gafas.png";
});


function modoClaro() {

    const modoclaro = document.getElementById("modoclaro");
    const logo = document.getElementById("logo");
    const links = document.querySelectorAll(".links strong");
    const body = document.querySelector("#body");
    const principal = document.querySelector(".principal");
    const titleHabilidad = document.querySelector(".title_Habilidades");
    const volumen = document.getElementById("volumen");
    const menu = document.getElementById("menu");
    const ocultar = document.getElementById("ocultar");
    let count = 0;
    let num = 0;

    menu.addEventListener("click",()=>{
        num++;
        if (num == 1) {
            menu.style.transition = "all 0.5s";
            menu.style.transform = "rotateY(0)" ;
            ocultar.style.right = "0";
        }else{
            menu.style.transform = "rotateY(180deg)" ;
            ocultar.style.right = "-18vw";
            num = 0;
        }
    });

    modoclaro.addEventListener("click", () => {
        count++;
        if (count == 1) {
            modoclaro.src = "/images/soleado-white.png";
            cambio_gafas.src = "/images/jovenPrincipal.png";
            body.style.backgroundColor = "#753a3a";
            principal.style.borderBottom = "0.1vw solid #ffffff";
            links.forEach(element => {
                element.style.color = "white";
            });
            logo.src = "/images/logo-brownmodo.png";
            cambio_gafas.addEventListener("mouseover", () => {

                cambio_gafas.src = "/images/jovenPrincipal-gafas.png";
            });
            cambio_gafas.addEventListener("mouseout", () => {
                
                cambio_gafas.src = "/images/jovenPrincipal.png";
            });
            titleHabilidad.style.color = "white";
            menu.style.color = "white";
            volumen.style.color = "white";
            
        } else {
            volumen.style.color = "brown";
            modoclaro.src = "/images/soleado.png";
            cambio_gafas.src = "/images/jovenPrincipal-gafas.png";
            body.style.backgroundColor = "#ffffff";
            links.forEach(element => {
                element.style.color = "#a52a2a";
            });
            logo.src = "/images/logo-brown.png";
            cambio_gafas.addEventListener("mouseover", () => {

                cambio_gafas.src = "/images/jovenPrincipal.png";
            });
            cambio_gafas.addEventListener("mouseout", () => {
                cambio_gafas.src = "/images/jovenPrincipal-gafas.png";
            });
            titleHabilidad.style.color = "#4a1b1b";
            menu.style.color = "brown";
            principal.style.borderBottom = "0.1vw solid #000000";
            count = 0;
        }
    });
}
modoClaro();

function audioPag() {
    const volumen = document.getElementById("volumen");
    const audio = document.getElementById("audio");
    let count = 0;

    volumen.addEventListener("click", () => {
        count++;
          if (count == 1) {
            audio.play();
            volumen.innerHTML = "volume_up";
        } else {
            volumen.innerHTML = "volume_off";
            audio.pause();
            count = 0;
          }
        
        audio.addEventListener('ended', ()=> {
          audio.currentTime = 0;
          audio.play();
        });
    });
}
audioPag();

/* ROTAR IMAGENES */

function rotar(){

    let rotar = document.querySelectorAll('#rotate');
    let imagenes = document.querySelectorAll('#rotate img');

    let texto = document.querySelectorAll('.textoOcultar');
    
    
    rotar.forEach((element, item) => {
    element.addEventListener('mouseover', () => {
        texto[item].style.display = "block";
        element.children[0].style.display = "none";

    });
    element.addEventListener('mouseout', () => {
        element.children[0].style.display = "block";
        texto[item].style.display = "none";
    });
});
}
rotar();

function seccion() {
    let elemento = document.getElementById('habilidades');
    elemento.addEventListener('click', () =>{
        let app = document.getElementById('habilidades_all');
        app.scrollIntoView({ behavior: 'smooth' });
        
    });
}
seccion();

function button(){

    const boton = document.getElementById("boton");
    
    boton.addEventListener("mouseover", () => {
        boton.style.animation = "cambio";
    });
    boton.addEventListener("mouseleave", () => {
        boton.style.animation = "button 3s infinite alternate";
    });
}
button();

function idioma(){
    const espana = document.getElementById("espana");
    const eeuu = document.getElementById("eeuu");

    eeuu.addEventListener("click", ()=>{
        eeuu.classList.add("selected");
        espana.classList.remove("selected");
    });
    espana.addEventListener("click", ()=>{
        espana.classList.add("selected");
        eeuu.classList.remove("selected");
    });
}
idioma();
