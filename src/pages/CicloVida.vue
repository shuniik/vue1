<template>
  <div>
    <h5>Ciclo de vida</h5>
    <q-btn to="/">Ir al inicio</q-btn>
    <q-btn @click="tareas.push('Nueva tarea')">Agregar tarea</q-btn>
    {{ tareas }}
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";
const tareas = ref([]);

onMounted(() => {
  console.log(" se ha montado el componente ");
});
onUnmounted(() => {
  console.log(" se ha desmontado el componenete ");
});

onUpdated(() => {
  console.log("se ha actualizado el DOM");
});
</script>

<style></style>
