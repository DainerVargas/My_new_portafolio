<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Usando vue y sass</title>
</head>
<body>
    @vite('resources/sass/app.scss')

    <header class="principal">
        <h2 class=" title">Titulo</h2>
        <nav class="links">
            <a href="#">Inicio</a>
            <a href="#">Sobre mi</a>
            <a href="#">Habilidades</a>
            <a href="#">Diviertete</a>
        </nav>
        <div id="menu">
            <mi-menu> </mi-menu> 
        </div>
    </header>

    <div id="app">
        <mi-componente />
    </div>

    @vite('resources/js/app.js')
</body>
</html>