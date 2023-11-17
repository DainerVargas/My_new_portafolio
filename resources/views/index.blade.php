<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando vue y sass</title>
</head>
<body id="body">
    @vite('resources/sass/app.scss')
<div id="hidden">
    <header class="principal">
        <img id="logo" class="principal__imagen" src="/images/logo-brown.png" alt="">
        <nav class="links" >
            <a href="#">Sobre mi</a>
            <a href="#">Habilidades</a>
            <a href="#">Proyectos</a>
            <a href="#">Diviertete</a>
        </nav>
        <div class="modo">
            <img id="modoclaro" class="modo__img" src="/images/soleado.png" alt="">
            <img id="volumen" class="modo__img" src="/images/bajar-volumen-brown.png" alt="">
            
            <img id="volumen-white" class="modo__img" src="/images/bajar-volumen.png" alt="">
        </div>

    </header>

    <div id="app">
        <mi-componente />
    </div>

    <audio id="audio" src="/music/AudioPagina.mpeg"></audio>
</div>


@vite('resources/js/app.js')
@vite('resources/js/main.js')
</body>
</html>
