<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-3">
        <q-input
          v-model="dato1.contador"
          label="contador:"
          type="number"
          outlined
        >
        </q-input>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-3">
        <q-btn
          label="Guardar"
          color="primary"
          @click="guardarDato1"
          class="q-mt-md"
        ></q-btn>
      </div>
    </div>
    <div>
      <q-btn @click="agregarAnuncio">probar firebase</q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { onMounted, ref } from "vue";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../boot/firebase";

const $q = useQuasar();
const dato1 = ref({
  contador: 0,
});

const nuevoAnuncio = ref({
  titulo: "holamundo",
  descripcion: "holamundo descripcion",
  precio: 1000.22,
  imageURL: "x",
});

function guardarDato1() {
  try {
    localStorage.setItem("dato1", JSON.stringify(dato1.value));
    $q.notify({
      color: "positive",
      message: "Dato guardado correctament",
      icon: "done",
    });
  } catch (error) {
    $q.notify({
      color: "negative",
      message: error,
      icon: "report_problem",
    });
  }
}

function leerDato1() {
  try {
    const dato1Local = localStorage.getItem("dato1");
    if (dato1Local) {
      dato1.value = JSON.parse(dato1Local);
    }
  } catch (error) {
    console.log(error);
    $q.notify({
      color: "negative",
      message: "error al leer el dato",
      icon: "report_problem",
    });
  }
}

async function agregarAnuncio() {
  console.log("Agregando anuncio");
  try {
    const docRef = await addDoc(collection(db, "anuncios"), nuevoAnuncio.value);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

onMounted(() => {
  leerDato1();
});
</script>

<style></style>
