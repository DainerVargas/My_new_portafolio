<div class="container">
    <div class="container__title">
        <h2 class="size">Aplicativo SENA</h2>
    </div>
    <div class="container__image">
        <img wire:click="image" class="{{ $active }}" id="project_img" src="/images/senaAplicativo.png" alt="img">
        @if ($active == 'active')
            <span wire:click="image()" class="material-symbols-outlined abrir">
                open_in_new_down
            </span>
        @else
            <span wire:click="image()" class="material-symbols-outlined abrir"> open_in_new </span>
        @endif

    </div>
    <div class="container__description">
        <p class="texto">Realicé un aplicativo para la calificación de programas de formación, donde ayuda a los
            profesionales de la calidad a mantener la información ordenada, ya que así es más eficiente y eficaz de
            ver los resultados que le han asignado a cada programa. Esto ayuda a mantener los programas que son
            útiles independientemente de cada centro de formación del país.
        </p>
        <div class="link">
            <a href="#" target="_blank"><button>Ver Proyecto</button></a>
        </div>
    </div>
</div>
