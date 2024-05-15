<template>
  <div>
    <slot name="header"></slot>

    <strong>
      <div>
        <!-- <q-btn
          @click="$emit('eliminar', propiedades.nombre)"
          icon="delete"
          size="sm"
          round
        ></q-btn> -->
      </div>
    </strong>
  </div>
</template>

<script setup>
// const propiedades = defineProps(["nombre", "completado"]);
const propiedades = defineProps({
  nombre: String,
  completado: {
    type: Boolean,
    default: true,
    required: true,
  },
});
</script>

<style></style>
