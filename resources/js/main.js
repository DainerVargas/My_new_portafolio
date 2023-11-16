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
    let count = 0;
    
    modoclaro.addEventListener("click", () => {
        count++;
        if (count == 1) {
            modoclaro.src = "/images/soleado-white.png";
            cambio_gafas.src = "/images/jovenPrincipal.png";
            body.style.backgroundColor = "#a52a2a";
            links.forEach(element => {
                element.style.color = "white";
            });
            logo.src = "/images/logo-brownmodo.png";
        }else{
            modoclaro.src = "/images/soleado.png";
            cambio_gafas.src = "/images/jovenPrincipal-gafas.png";
            body.style.backgroundColor = "#ffffff";
            links.forEach(element => {
                element.style.color = "#a52a2a";
            });
            logo.src = "/images/logo-brown.png";
            count = 0;
        }
    });
}

modoClaro();



