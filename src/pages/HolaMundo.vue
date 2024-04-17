<template>
  <div>
    <h2>Hola Mundo a todos!!!!</h2>
    <h5>{{ nombre }}</h5>

    <q-input v-model="nombre"></q-input>
    <q-btn @click="modificar">Modificar</q-btn>
    <br />
    <h5>Pais: {{ direccion.pais }}</h5>
    <h5>Departamento: {{ direccion.departamento }}</h5>
    <h5>Zona: {{ direccion.zona }}</h5>
    <h5>{{ direccion }}</h5>
  </div>
</template>
<script setup>
import { ref } from "vue";

const nombre = ref("Libreta");

const direccion = ref({
  pais: "Guatemala",
  departamento: "Quetzaltenango",
  zona: "9",
});

const modificar = () => {
  nombre.value = "cambiando los datos";
  direccion.value.municipio = "Ciudad";
};
</script>
<style lang=""></style>
