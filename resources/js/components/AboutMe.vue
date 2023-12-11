<template>
    <div class="aboutMe">
        <div class="foto borderFoto">
            <img class="foto__img" src="/images/foto.png" alt="">
        </div>
        <div class="textoAbout">
            <p class="efecto-habilidades">{{ texto }}</p>
        </div>
        <div id="absoluteAbout"></div>
        <div class="absoluteAbout2"></div>
        <div class="nuts">
            <div class="nut1"> </div>
            <div class="nut2">
                <span class="material-symbols-outlined mando">keyboard_control_key</span>
            </div>
            <div id="habilidades" class="nut3">
                <span class="material-symbols-outlined mando">expand_more</span>
            </div>
            <div class="nut4"> </div>
        </div>
    </div>
</template>

<script setup>
  const texto = "Hola soy Dainer Vargas un amante del diseño web. He tenido logros notables, como ser Campeón Regional de La Guajira y representar a mi región en Cúcuta. Cada día sigo persiguiendo la excelencia en el diseño web, explorando nuevas tendencias y técnicas para brindar soluciones únicas y atractivas a mis clientes y audiencia.";
</script>


<style>

</style>