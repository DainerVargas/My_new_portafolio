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
    const habilidades = document.querySelectorAll(".efecto-habilidades");
    const logros = document.querySelectorAll(".logros p");
    const body = document.querySelector("#body");
    const principal = document.querySelector(".principal");
    const titleHabilidad = document.querySelector(".title_Habilidades");
    const spaceT = document.querySelector(".spaceT");
    const space = document.getElementById("space");
    const space2 = document.getElementById("space2");
    const space3 = document.getElementById("space3");
    console.log(space);
    console.log(space2);
    console.log(space3);
    const volumen = document.getElementById("volumen");
    const menu = document.getElementById("menu");
    const Mynombre = document.getElementById("nombre");
    const ocultar = document.getElementById("ocultar");
    const component = document.getElementById("component");
    const flecha = document.getElementById("flecha");
    let count = 0;
    let num = 0;

    menu.addEventListener("click", () => {
        num++;
        if (num == 1) {
            menu.style.transition = "all 0.5s";
            menu.style.transform = "rotateY(0)";
            ocultar.style.right = "0";
        } else {
            menu.style.transform = "rotateY(180deg)";
            ocultar.style.right = "-20vw";
            num = 0;
        }
    });

    modoclaro.addEventListener("click", () => {
        count++;
        if (count == 1) {
            modoclaro.src = "/images/soleado-white.png";
            cambio_gafas.src = "/images/jovenPrincipal.png";
            body.style.backgroundColor = "#010926";
            spaceT.style.backgroundColor = "#000e35";
            space.style.backgroundColor = "#010b2b";
            space2.style.backgroundColor = "#010b2b";
            space3.style.backgroundColor = "#010b2b";
            component.style.background = "linear-gradient(#010926,#001a5b)";
            links.forEach(element => {
                element.style.color = "white";
            });
            logros.forEach(elemen => {
                elemen.style.color = "white";
            });
            habilidades.forEach(elemen => {
                elemen.style.color = "white";
            });
            logo.src = "/images/logo-white.png";
            cambio_gafas.addEventListener("mouseover", () => {

                cambio_gafas.src = "/images/jovenPrincipal-gafas.png";
            });
            cambio_gafas.addEventListener("mouseout", () => {

                cambio_gafas.src = "/images/jovenPrincipal.png";
            });
            titleHabilidad.style.color = "white";
            menu.style.color = "white";
            volumen.style.color = "white";
            Mynombre.style.color = "white";
            flecha.style.color = "white";

        } else {
            component.style.background = "";
            habilidades.forEach(elemen => {
                elemen.style.color = "#010926";
            });
            spaceT.style.backgroundColor = "white";
            space.style.backgroundColor = "white";
            space2.style.backgroundColor = "white";
            space3.style.backgroundColor = "white";
            Mynombre.style.color = "#010926";
            volumen.style.color = "#010926";
            modoclaro.src = "/images/soleado.png";
            cambio_gafas.src = "/images/jovenPrincipal-gafas.png";
            body.style.backgroundColor = "white";
            links.forEach(element => {
                element.style.color = "#010926";
            });
            logo.src = "/images/logo-blue.png";
            logros.forEach(eleme => {
                eleme.style.color = "#010926";
            });
            cambio_gafas.addEventListener("mouseover", () => {
                
                cambio_gafas.src = "/images/jovenPrincipal.png";
            });
            cambio_gafas.addEventListener("mouseout", () => {
                cambio_gafas.src = "/images/jovenPrincipal-gafas.png";
            });
            titleHabilidad.style.color = "#010926";
            menu.style.color = "#010926";
            flecha.style.color = "#010926";
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

        audio.addEventListener('ended', () => {
            audio.currentTime = 0;
            audio.play();
        });
    });
}
audioPag();

/* ROTAR IMAGENES */

function rotar() {

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
    elemento.addEventListener('click', () => {
        let app = document.getElementById('title_Habilidades');
        app.scrollIntoView({ behavior: 'smooth' });

    });
}
seccion();

function button() {

    const boton = document.getElementById("boton");

    boton.addEventListener("mouseover", () => {
        boton.style.animation = "cambio";
    });
    boton.addEventListener("mouseleave", () => {
        boton.style.animation = "button 3s infinite alternate";
    });
}
button();

function idioma() {
    const espana = document.getElementById("espana");
    const eeuu = document.getElementById("eeuu");

    eeuu.addEventListener("click", () => {
        eeuu.classList.add("selected");
        espana.classList.remove("selected");
    });
    espana.addEventListener("click", () => {
        espana.classList.add("selected");
        eeuu.classList.remove("selected");
    });
}
idioma();



function cambio() {
    const texto1 = document.getElementById("texto1");
    const texto2 = document.getElementById("texto2");
    const texto3 = document.getElementById("texto3");
    texto1.style.display = "block";
    texto2.style.display = "none";
    texto3.style.display = "none";
    setTimeout(function () {
        texto1.style.display = "none";
        texto2.style.display = "block";
        texto3.style.display = "none";
    }, 8000);
    setTimeout(function () {
        texto1.style.display = "none";
        texto2.style.display = "none";
        texto3.style.display = "block";
    }, 16000);

}
setInterval(cambio, 24000);
cambio();