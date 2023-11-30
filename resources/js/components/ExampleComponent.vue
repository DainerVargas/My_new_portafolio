<template>
  <div class="texto" id="component">
    <img
      id="cambio_gafas"
      class="texto__imagen"
      src="/images/jovenPrincipal-gafas.png"
      alt=""
    />
    <p class="texto__parrafo" id="nombre">{{ texto }} <span class="spaceT">|</span></p>
    <p></p>
    <div class="flex hidden">
      <p id="flecha" class="flecha">></p>
      <p class="efecto-habilidades" id="texto1">Desarrollador web b<span id="space" class="space">|</span></p>
      <p class="efecto-habilidades" id="texto2">Frontend y Backend b<span id="space2" class="space">|</span></p>
      <p class="efecto-habilidades" id="texto3">Diseñador UX/UI b<span id="space3" class="space">|</span></p>
    </div>
    <div class="logros">
      <section class="titleLogros">
        <p id="WorldSkillsTitle">Habilidad: Tenologia web, WorldSkills Colombia 2023</p>
      </section>

      <div class="logro1">
        <img class="medalla" src="/images/insignia.png" alt="medalla">
        <p>Fui campeon regional de la Guajira</p>
      </div>

      <div class="logro2">
        <img class="medalla" src="/images/insignia.png" alt="medalla">
        <p>Me posicioné en el primer lugar de todas las regionales de Colombia</p>
      </div>

      <div class="logro3">
        <img class="medalla" src="/images/insignia.png" alt="medalla">
        <p>Reprepesente a la Guajira en Cúcuta</p>
      </div>
    </div>
    <a
      href="/document/Dainer Vargas - Perfil Profesional.pdf"
      download="Dainer Vargas - Perfil Profesional.pdf"
    >
      <button id="boton" class="texto__download">Descarga mi CV</button>
    </a>
    <div class="absolute"></div>
    <div class="absolute2"></div>
  </div>
</template>

<script setup>
const texto = "¡Hola!, Soy Dainer Vargas J.";

</script>

<style >

.efecto-habilidades {
  font-size: 2vw;
  color: #010d2c;
  font-family: "Courier New", Courier, monospace;
  z-index: 99;
}
.flex {
  position: absolute;
  top: 6.2vw;
  right: 30vw;
  display: flex;
  align-items: center;
  column-gap: 1vw;
  z-index: 99;
}

.flecha {
  font-size: 2vw;
  color: #010d2c;
}
.space {
  position: absolute;
  right: 0;
  width: 100%;
  animation: write 4s infinite steps(18) alternate;
  background-color: white;
  /* background-color: #000e35; */
}
@keyframes write {
  from {
    width: 95%;
  }
  to {
    width: 0;
  }
}
.spaceT {
  position: absolute;
  right: 0;
  width: 0;
  animation: title 5s steps(28) alternate;
  background-color: white;
 /*  background-color: #010b2b; */
}
@keyframes title {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}

/* LOGROS */

.medalla{
  height: 3vw;
}
.logros{
  margin-top: 8vw;
  margin-left: 6vw;
  z-index: 99;
}
.logros div{
  display: flex;
  align-items: center;
}
.logros div p,.titleLogros p{
  font-size: 1.5vw;
  color: #010d2c;
}

.absolute{
  height: 7vw;
  width: 11vw;
  background-color: #6883dc;
  /* background-color: #001043; */
  border-radius:50%;
  border: none;
  position: absolute;
  top: -0.6vw;
  right: 47vw;
  z-index: 0;
}
.absolute2{
  height: 30vw;
  width: 30vw;
  background: linear-gradient(#b1c3ee ,  #6f91e8);
 /*  background: linear-gradient(#010b2c ,  #002582); */
  border-radius:50%;
  border: none;
  position: absolute;
  top: 18vw;
  right: -8vw;
  z-index: 1;
}

</style>



<!-- <p>un amante del diseño web. He tenido logros notables, como ser Campeón Regional de La Guajira y representar a mi región en Cúcuta. Cada día sigo persiguiendo la excelencia en el diseño web, explorando nuevas tendencias y técnicas para brindar soluciones únicas y atractivas a mis clientes y audiencia.</p> -->