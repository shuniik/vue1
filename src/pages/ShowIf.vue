<template>
  <div class="q-ma-lg">
    <h5>v-show y el v-if</h5>
    <p>
      <q-btn @click="mostrar = !mostrar">Mostrar/ocultar</q-btn>
    </p>
    <p v-show="mostrar" class="bg-primary">Este es un texto a mostrar</p>

    <p v-if="objeto">Nombre: {{ objeto.nombre }}</p>
    <p v-if="objeto">Edad: {{ objeto.edad }}</p>
    <q-btn @click="objeto = { nombre: 'Juan', edad: 20 }">Mostrar objeto</q-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mostrar = ref(false);
const objeto = ref(null);
</script>

<style></style>
