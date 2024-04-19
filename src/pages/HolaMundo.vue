<template>
  <div>
    <h2>Hola Mundo a todos!!!!</h2>

    <q-input v-model="nuevaTarea"></q-input>
    <q-btn @click="agregarTarea">Agregar</q-btn>
    <p>{{ tareas }}</p>
    <br />

    <div>
      <li
        v-for="(item, key) in tareasPendiente"
        :key="key"
        :class="{ 'bg-grey': esPar(key) }"
      >
        {{ item.nombre }} -{{ item.hecho }} - {{ key }}
        <q-btn @click="eliminar(key)" icon="delete_forever">Eliminar</q-btn>
        <q-toggle v-model="item.hecho" />
      </li>
    </div>
    <p>Terminadas: {{ contaTerminadas }}</p>
    <p>
      Ocultar tareas completadas:
      <q-toggle v-model="ocultarCompletados"></q-toggle>
    </p>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const tareas = ref([]);
const nuevaTarea = ref("");
const ocultarCompletados = ref(false);

//propiedades computadas

const esPar = (numero) => {
  return numero % 2 === 0;
};

const tareasPendiente = computed(() => {
  if (ocultarCompletados.value) {
    return tareas.value.filter((tarea) => tarea.hecho == false);
  } else {
    return tareas.value;
  }
});

const contaTerminadas = computed(() => {
  let contador = 0;

  tareas.value.forEach((item) => {
    if (item.hecho) {
      contador++;
    }
  });

  return contador;
});

const agregarTarea = () => {
  tareas.value.push({ nombre: nuevaTarea.value, hecho: false });
  nuevaTarea.value = "";
};

const eliminar = (id) => {
  tareas.value = tareas.value.filter((tarea) => item != tarea);
};
</script>
<style lang=""></style>
