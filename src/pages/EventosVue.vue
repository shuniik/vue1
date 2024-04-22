<template>
  <div class="q-pa-lg">
    <p>
      <q-btn v-on:click="contador++">Incrementar</q-btn>
      <q-btn @click="incrementar">Incrementar</q-btn>
      <q-btn @click="revertir(cadena)">Revertir</q-btn>
    </p>
    <p>{{ contador }}</p>
    <p @click="click2">
      estee es un texto
      <q-btn @click.stop="click1">propagación</q-btn>
    </p>
    <p>
      <q-input
        @keyup.enter="incrementar"
        label="incrementamos el contador con"
      ></q-input>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cadena = ref("juan pablo");
const contador = ref(0);

const click1 = () => {
  console.log("click1");
};
const click2 = () => {
  console.log("click2");
};

function incrementar(event) {
  contador.value++;
  if (event) {
    console.log(event.type);
  }
}
const revertir = (texto) => {
  console.log(texto.split("").reverse().join(""));
};
</script>

<style></style>
