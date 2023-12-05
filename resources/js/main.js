const cambio_gafas = document.getElementById("cambio_gafas");

cambio_gafas.addEventListener("mouseover", () => {

    cambio_gafas.src = "/images/jovenPrincipal.png";
});
cambio_gafas.addEventListener("mouseout", () => {

    cambio_gafas.src = "/images/jovenPrincipal-gafas.png";
});

const absolute = document.getElementById("absolute");
setTimeout(() => {
    absolute.classList.add("absolute");
}, 1300);

const absolute3 = document.querySelector(".absolute3");
setTimeout(() => {
    absolute3.style.left = "0";
}, 1300);


function modoClaro() {

    const modoclaro = document.getElementById("modoclaro");
    const logo = document.getElementById("logo");
    const logomenu = document.getElementById("logomenu");
    const links = document.querySelectorAll(".links strong");
    const habilidades = document.querySelectorAll(".efecto-habilidades");
    const logros = document.querySelectorAll(".logros p");
    const body = document.querySelector("#body");
    const titleHabilidad = document.querySelector(".title_Habilidades");
    const title_idioma = document.getElementById("title_idioma");
    const spaceT = document.querySelector(".spaceT");
    const space = document.getElementById("space");
    const space2 = document.getElementById("space2");
    const space3 = document.getElementById("space3");
    const menu = document.getElementById("menu");
    const Mynombre = document.getElementById("nombre");
    const conte_herramientas = document.getElementById("conte_herramientas");
    const ocultar = document.getElementById("ocultar");
    const component = document.getElementById("component");
    const flecha = document.getElementById("flecha");
    const rotate = document.querySelectorAll("#rotate");
    const borderText = document.querySelector(".textoAbout");
    const borderFoto = document.querySelector(".borderFoto");
    const aboutMe = document.querySelector(".aboutMe");
    let modo = 0;
    let num = 0;


    window.addEventListener("DOMContentLoaded", () => {
        mododark();
    });


    modoclaro.addEventListener("click", () => {
        modo++;
        if (modo == 1) {
            localStorage.setItem("cambio", modo);
        } else {
            localStorage.setItem("cambio", modo);
            modo = 0;
        }
        mododark();
    });

    function mododark() {
        const newestado = localStorage.getItem("cambio");
        if (newestado == 1) {
            aboutMe.style.background = "linear-gradient(#001a5b, #010924)";
            ocultar.style.background = "linear-gradient(#012c98, #010924)";
            modoclaro.src = "/images/soleado-white.png";
            cambio_gafas.src = "/images/jovenPrincipal.png";
            body.style.background = "#010926";
            spaceT.style.backgroundColor = "#000e35";
            space.style.background = "linear-gradient(#000e33,#000e36)";
            space2.style.background = "linear-gradient(#000e33,#000e36)";
            space3.style.background = "linear-gradient(#000e33,#000e36)";
            component.style.background = "linear-gradient(#010926,#001a5b)";
            conte_herramientas.style.background = "linear-gradient(#010926,#001a5b)";
            borderText.style.border = "0.1vw solid white";
            borderFoto.style.border = "0.7vw solid gray";
            links.forEach(element => {
                element.style.color = "white";
            });
            logros.forEach(elemen => {
                elemen.style.color = "white";
            });
            rotate.forEach(elemen => {
                elemen.style.background = "radial-gradient(#405da0, #0e1b3b)";
            });
            habilidades.forEach(elemen => {
                elemen.style.color = "white";
            });
            logo.src = "/images/logo-white.png";
            logomenu.src = "/images/logo-white.png";
            cambio_gafas.addEventListener("mouseover", () => {

                cambio_gafas.src = "/images/jovenPrincipal-gafas.png";
            });
            cambio_gafas.addEventListener("mouseout", () => {

                cambio_gafas.src = "/images/jovenPrincipal.png";
            });
            titleHabilidad.style.color = "white";
            menu.style.color = "white";
            Mynombre.style.color = "white";
            flecha.style.color = "white";
            title_idioma.style.color = "white";

        } else {
            aboutMe.style.background = "#fff";
            conte_herramientas.style.background = "linear-gradient(#fff,#fff)";
            title_idioma.style.color = "#010926";
            ocultar.style.background = "linear-gradient(#ffffffe2, #ffffffd0)";
            component.style.background = "";
            habilidades.forEach(elemen => {
                elemen.style.color = "#010926";
            });
            rotate.forEach(elemen => {
                elemen.style.background = "radial-gradient(#b6c6ec, #4e70c1)";
            });
            spaceT.style.backgroundColor = "white";
            space.style.background = "linear-gradient(#fff,#fff)";
            space2.style.background = "linear-gradient(#fff,#fff)";
            space3.style.background = "linear-gradient(#fff,#fff)";
            Mynombre.style.color = "#010926";
            modoclaro.src = "/images/soleado.png";
            cambio_gafas.src = "/images/jovenPrincipal-gafas.png";
            body.style.backgroundColor = "white";
            links.forEach(element => {
                element.style.color = "#010926";
            });
            logo.src = "/images/logo-blue.png";
            logomenu.src = "/images/logo-blue.png";
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
            borderText.style.border = "0.1vw solid #010926";
            borderFoto.style.border = " 0.7vw solid #000e41";
        }
    }
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
}
modoClaro();

/* ROTAR IMAGENES */

function rotar() {

    let rotar = document.querySelectorAll('#rotate');

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
    let elemento = document.querySelectorAll('#habilidades');
    let home = document.querySelectorAll('.nut2');

    home.forEach(elemt => {
        elemt.addEventListener('click', () => {
           let principal = document.getElementById('principal');
           principal.scrollIntoView({behavior: 'smooth'});
        });
    });

    elemento.forEach(eleme => {
        eleme.addEventListener('click', () => {
            let app = document.getElementById('title_Habilidades');
            app.scrollIntoView({ behavior: 'smooth' });
        });
    });

    let about = document.getElementById('sobre_mi');
    about.addEventListener('click', () => {
        let spaceaboutMe = document.querySelector('.aboutMe');
        spaceaboutMe.scrollIntoView({ behavior: 'smooth' });
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
    }, 6000);
    setTimeout(function () {
        texto1.style.display = "none";
        texto2.style.display = "none";
        texto3.style.display = "block";
    }, 12000);

}
setInterval(cambio, 18000);
cambio();