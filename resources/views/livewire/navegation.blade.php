<div class="infoAbout" >
    <div class="menu">
        <div class="links">
            <a {{-- wire:click="section(1)" --}} class="active colorw">Imagen sobre mi</a>
            {{-- <a wire:click="section(2)" class="colorw">Educación</a>
            <a wire:click="section(3)" class="colorw">Experiencias</a> --}}
        </div>
    </div>
    <div class="infoMe" >
        {{-- @if ($value == 1) --}}
            <div class="conteText">
                <div class="conteTitle">
                    <p class="colorw">ABOUT ME</p>
                </div>
                <p class="colorw">Hola, feliz {{$nombre_dia}}, mi nombre es Dainer Vargas soy un amante del diseño web.
                    He tenido logros notables, como ser Campeón Regional de la
                    Guajira y representar a mi región en Cúcuta. Cada día sigo
                    persiguiendo la excelencia en el diseño web, explorando nuevas
                    tendencias y técnicas para brindar soluciones únicas y
                    atractivas a mis clientes y audiencia.</p>
            </div>
      {{--   @elseif ($value == 2)
        <div class="conteText">
            <div class="conteTitle">
                <p class="colorw">EDUCATION</p>
            </div>
            <p class="colorw">section 2</p>
        </div>
        @elseif ($value == 3)
        <div class="conteText">
            <div class="conteTitle">
                <p class="colorw">EXPERIENCES</p>
            </div>
            <p class="colorw">section 3</p>
        </div>
        @endif --}}
        <div id="fireworks-container">
            <canvas id="fireworks"></canvas>
          </div>
    </div>

</div>
