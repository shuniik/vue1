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

        <q-btn round dense flat color="grey-8" icon="notifications">
          <q-badge color="red" text-color="white" floating>
            {{ contadorr }}
          </q-badge>
          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
      </div>
    </div>

    <div v-for="anuncio in anuncios" :key="anuncio.id" class="q-pa-lg">
      <li>
        {{ anuncio.id }} -- {{ anuncio.descripcion }} - {{ anuncio.titulo }}
        <q-btn @click="eliminar(anuncio.id)" icon="delete" size="sm" round />
      </li>
    </div>
    <div>
      <q-btn @click="agregarAnuncio">probar firebase</q-btn>
    </div>

    <div>
      {{ anuncios }}
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { computed, onMounted, ref } from "vue";
import { useCollection } from "vuefire";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../boot/firebase";

const $q = useQuasar();
const dato1 = ref({
  contador: 0,
});

const contador = ref();

const nuevoAnuncio = ref({
  titulo: "holamundo",
  descripcion: "holamundo descripcion",
  precio: 1000.22,
  imageURL: "x",
});

async function eliminar(id) {
  console.log("Eliminado anuncio", id);
  await deleteDoc(doc(db, "anuncios", id));
}

const anuncios = useCollection(collection(db, "anuncios"));

const obtenerCantidadAnuncios = () => {
  console.log("anuncios:", anuncios.length); // Verificamos el contenido de 'anuncios'
  if (anuncios.value && anuncios.value.docs) {
    cantidadAnuncios.value = anuncios.value.docs.length;
  } else {
    console.log("No hay documentos en la colección 'anuncios'.");
  }
};

const contadorr = anuncios.size;

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
  obtenerCantidadAnuncios();
});
</script>

<style></style>
