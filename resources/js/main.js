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
    const links = document.querySelectorAll(".links a");
    const body = document.querySelector("#body");
    const principal = document.querySelector(".principal");
    const volumen = document.getElementById("volumen");
    const volumenWhite = document.getElementById("volumen-white");
    let count = 0;

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
            volumen.style.display ="none";
            volumenWhite.style.display ="block";
            let contadorVolumen = 0;
            volumenWhite.addEventListener("click", ()=>{
                contadorVolumen++;
                if (contadorVolumen == 1) {
                    volumenWhite.src ="/images/subir-volumen.png";
                    audio.play();
                }else{
                    volumenWhite.src ="/images/bajar-volumen.png";
                    audio.pause();
                    contadorVolumen =0;
                }
            });

        } else {
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
            principal.style.borderBottom = "0.1vw solid #000000";
            count = 0;
            volumen.style.display ="block";
            volumenWhite.style.display ="none";
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
            volumen.src = "/images/subir-volumen-brown.png";
          } else {
            audio.pause();
            volumen.src = "/images/bajar-volumen-brown.png";
            count = 0;
          }
        
        audio.addEventListener('ended', ()=> {
          audio.currentTime = 0;
          audio.play();
        });
    });
}
audioPag();