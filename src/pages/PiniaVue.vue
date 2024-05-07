<template>
  <q-page class="q-ma-lg row">
    <div class="col">
      <h6 class="text-blue">contador local</h6>
      <h6 class="text-blue">{{ contador }}</h6>
      <q-btn @click="contador++" color="primary" label="Incrementar"></q-btn>
    </div>
    <div class="col">
      <h6 class="text-blue">contador pinia</h6>
      <h6 class="text-blue">{{ store.contador }}</h6>
      <q-btn
        @click="store.incrementar"
        color="primary"
        label="Incrementar"
      ></q-btn>
      <q-btn @click="store.limpiar" color="primary" label="limpiar"></q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useContadorStore } from "../stores/contador";

const store = useContadorStore();
const contador = ref(0);
</script>

<style></style>
