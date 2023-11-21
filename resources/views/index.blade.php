<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>DainerWS</title>
</head>
<body id="body">
    @vite('resources/sass/app.scss')
<div id="hidden">
    <header class="principal">
       <a href="DainerWs"><img id="logo" class="principal__imagen" src="/images/logo-brown.png" alt=""></a>
        <nav class="links" >
            <div class="sobre">
                <strong id="sobre_mi">Sobre mi</strong>
            </div>
            <div class="habilidad">
                <strong id="habilidades">Habilidades</strong>
            </div>
            <div class="proyec">
                <strong id="proyectos">Proyectos</strong>
            </div>
            <div class="divierte">
                <strong id="diviertete">Diviertete</strong>
            </div>
        </nav>
        <div class="modo">

            <div class="conte_modo">
                <img id="modoclaro" class="modo__img" src="/images/soleado.png" alt="">
            </div>
                
            <div class="modo__volumen">
                <span id="volumen" class="material-symbols-outlined" >volume_off</span>
            </div>
            
        </div>
        <div class="menu">
            <span id="menu" class="material-symbols-outlined">sort</span>
        </div>
        <div id="ocultar">
            <div class="info_menu">
                <div class="logo_menu">
                    <img id="logomenu" class="principal__imagen" src="/images/logo-brownmodo.png" alt="">
                </div>

                <div class="idioma">
                    <p id="title_idioma">Selecciona tu idioma</p>
                    <div class="banderas">
                        <img id="espana" class="selected" src="/images/espana.png" alt="">
                        <img id="eeuu" src="/images/estados-unidos.png" alt="">
                    </div>
                </div>

                <div class="contacto">
                    <div class="linkedin contacto__red">
                        <img src="/images/linkedin.png" alt="">
                        <a href="https://www.linkedin.com/in/dainerws/" target="_blank">DainerWs</a>
                    </div>
                    <div class="github contacto__red">
                        <img src="/images/github-white.png" alt="">
                        <a href="https://github.com/DainerVargas" target="_blank">DainerVargas</a>
                    </div>
                    <div class="whatsApp contacto__red">
                        <img src="/images/Whatsapp.png" alt="">
                        <a href="https://wa.me/3242406307" target="_blank">Contáctame</a>
                    </div>
                </div>

            </div>
        </div>

    </header>

    <div id="app">
        <mi-componente />
    </div>

    <audio id="audio" src="/music/AudioPagina.mpeg"></audio>
    <div id="habilidades_all">
        <div id="conte_herramientas">
            <div class="title_Habilidades">
                <h2 id="color">MIS HABILIDADES</h2>
            </div>
            <div class="grid">
                <div class="card">
                    <div id="rotate" class="text-container">
                        <img id="js" src="/images/jsAvance.png" alt="Image">
                        <div class="textoOcultar">
                            <p id="color">JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript.
                                Se
                                define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y
                                dinámico.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div id="rotate" class="text-container">
                        <img id="php" src="/images/phpAvance.png" alt="Image">
                        <div class="textoOcultar">
                            <p id="color">PHP es un lenguaje de programación interpretado​ del lado del servidor y de uso general
                                que se adapta especialmente al desarrollo web.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div id="rotate" class="text-container">
                        <img id="laravel" src="/images/laravelAvance.png" alt="Image">
                        <div class="textoOcultar">
                            <p id="color">Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web
                                con PHP 5, PHP 7 y PHP 8. Su filosofía es desarrollar código PHP de forma elegante y
                                simple, evitando el "código espagueti". </p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div id="rotate" class="text-container">
                        <img id="mysql" src="/images/mysqlAvance.png" alt="Image">
                        <div class="textoOcultar">
                            <p id="color">
                                MySQL es un sistema de gestión de bases de datos relacionales (RDBMS) de código abierto
                                respaldado por Oracle y basado en el lenguaje de consulta estructurado (SQL).</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div id="rotate" class="text-container">
                        <img id="html" src="/images/htmlAvance.png" alt="Image">
                        <div class="textoOcultar">
                            <p id="color">HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div id="rotate" class="text-container">
                        <img id="css" src="/images/cssAvance.png" alt="Image">
                        <div class="textoOcultar">
                            <p id="color">CSS es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div id="rotate" class="text-container">
                        <img id="photoShop" src="/images/photoShopAvance.png" alt="Image">
                        <div class="textoOcultar">
                            <p id="color">Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div id="rotate" class="text-container">
                        <img id="xd" src="/images/xdAvance.png" alt="Image">
                        <div class="textoOcultar">
                            <p id="color">Adobe Xd es una aplicación móvil, donde puedes editar vídeos y fotos. Adobe XD apoya al diseño vectorial y a los sitios web wireframe, creando prototipos simples e interactivos con un solo clic.​</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
@vite('resources/js/app.js')
@vite('resources/js/main.js')

</body>
</html>
