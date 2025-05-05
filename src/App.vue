<template>
  <div class="container"><h1 class="text-4xl "> Hello world</h1>
    <button type="button" @click="whatsApp" class="btn btn-primary px-5 py-2   ">Manda un mensaje</button>
  </div>
  
</template>


<script setup>
import { ref } from 'vue';
const ENTRADA = 2000;

const mensaje = ref('Tacos de pollo \n FDFDS \n HOOLAS ${ENTRADA|0} '); 

function whatsApp() {
  const numero = '528712776911';
  const textoCodificado = encodeURIComponent(mensaje.value);
  const url = `https://wa.me/${numero}?text=${textoCodificado}`;
  window.open(url, '_blank');
}
</script>
