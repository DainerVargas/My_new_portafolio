<template>
    <div class="container">

        <div>
            <label @click="cambio" id="equis">&#8801</label>
        </div>
        <div id="ocultar">
            <div class="info">
                <h2>Ocultar</h2>
            </div>
        </div>
    </div>
</template>

<script setup>

let count = 0;
    function cambio(){
        count++;
        let equis = document.getElementById("equis");
        let ocultar = document.getElementById("ocultar");
        if(count == 1){
            equis.innerHTML = "&#215";
            ocultar.style.display = "block";
        }else{
            equis.innerHTML = "&#8801";
            ocultar.style.display = "none";
            count = 0;
        }

    }

</script>