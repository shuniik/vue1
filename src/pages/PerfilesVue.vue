import { ref } from 'vue';
<template>
  <q-page class="q-ma-lg">
    <div class="row">
      <q-btn @click="obtener" color="primary">obtener</q-btn>
      <q-btn @click="obtener10" color="secondary">obtener 10</q-btn>
      <q-btn @click="obtenerChicas" color="accent">obtener chicas</q-btn>
    </div>
    <div class="row">
      <q-card v-for="item in datos" :key="item.id" class="col-6 col-sm-3">
        <q-card-section>
          <q-img :src="item.picture.medium" style="max-width: 100px"></q-img>
        </q-card-section>
        <q-card-section>
          <q-card-title> Name: {{ item.name.first }} </q-card-title>
          <q-card-main>
            <p>Email: {{ item.email }}</p>
            <p>Phone: {{ item.phone }}</p>
          </q-card-main>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
import { api } from "boot/axios";

const datos = ref([]);

function obtener() {
  api
    .get("")
    .then((response) => {
      console.log(response.data);
      datos.value = response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
}
function obtener10() {
  api
    .get("", {
      params: {
        results: 10,
      },
    })
    .then((response) => {
      console.log(response.data);
      datos.value = response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
}
function obtenerChicas() {
  api
    .get("", {
      params: {
        results: 10,
        gender: "female",
      },
    })
    .then((response) => {
      console.log(response.data);
      datos.value = response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<style lang=""></style>
