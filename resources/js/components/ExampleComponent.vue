<template>
  <div class="texto">
    <img id="cambio_gafas" class="texto__imagen" src="/images/jovenPrincipal-gafas.png" alt="" />
    <p class="texto__parrafo">{{ texto }}</p>
  </div>
</template>
<style >
.texto {
  font-size: 20px;
  background:linear-gradient(#cc4141 ,#2b0d0d );
}
</style>


<script setup>
const texto =
  "¡Hola a todos! soy Dainer Manuel Vargas Jaraba, un amante del diseño web. He tenido logros notables, como ser Campeón Regional de La Guajira y representar a mi región en Cúcuta. Cada día sigo persiguiendo la excelencia en el diseño web, explorando nuevas tendencias y técnicas para brindar soluciones únicas y atractivas a mis clientes y audiencia.";
</script>
