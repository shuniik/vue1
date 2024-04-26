<template>
  <div class="q-ma-lg"></div>
  <div v-for="(tarea, key) in tareas" :key="key" class="q-pa-lg">
    <tareaDetalle
      @eliminar="eliminarTarea"
      :nombre="tarea.nombre"
      :completado="tarea.completado"
    >
      {{ tarea.nombre }} slot {{ tarea.completado }}
    </tareaDetalle>
  </div>
</template>

<script setup>
import { ref } from "vue";
import tareaDetalle from "../components/TareaDetalle.vue";

const tareas = ref([
  { nombre: "Aprender vue", completado: false },
  { nombre: "Aprender Firebase", completado: false },
  { nombre: "Aprender css", completado: false },
  { nombre: "Aprender html", completado: false },
  { nombre: "Aprender JavaScript", completado: false },
]);

const eliminarTarea = (nombre) => {
  console.log("eliminarTarea");
  console.log(nombre);
  tareas.value = tareas.value.filter((tarea) => tarea.nombre !== nombre);
};
</script>

<style></style>
