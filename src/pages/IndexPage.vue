<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />

    <q-btn class="bg-pink-4">hola 1</q-btn>
    <q-btn>hola 1</q-btn>
    <q-btn>hola 1</q-btn>
    <q-btn round dense flat color="grey-8" icon="notifications">
      <q-badge color="red" text-color="white" floating> 2 </q-badge>
      <q-tooltip>Notifications</q-tooltip>
    </q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
