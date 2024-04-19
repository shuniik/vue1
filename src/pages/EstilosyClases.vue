<template>
  <div>
    <h5>Reactividad de clases y estilos</h5>
    <p>
      <q-toggle v-model="isPrimary">Es primary</q-toggle>
    </p>
    <p class="q-pa-lg" :class="{ 'bg-primary': isPrimary }">
      Un texto cualquiera
    </p>

    <p>
      <q-toggle v-model="isDark" label="es dark" />
    </p>
    <p :class="estilo">el fondo de otro color</p>

    <p :style="{ 'background-color': colorFondo }">
      Cambiando el color del fondo
    </p>
    <q-color v-model="colorFondo" style="width: 80px" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isPrimary = ref(false);
const isDark = ref(false);
const colorFondo = ref();

const estilo = computed(() => {
  return {
    "bg-dark": isDark.value,
    "text-white": isDark.value,
    "q-pa-lg": isDark.value,
  };
});
</script>

<style></style>
