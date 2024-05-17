<template>
  <q-page>
    <q-btn color="primary" label="Iniciar sesión" @click="iniciarSesion" />
    <q-btn color="secondary" label="Cerrar sesión" @click="cerrarSesion" />
    <q-card v-if="usuario" style="width: 350px">
      <q-card-section>
        <q-avatar>
          <img :src="usuario.photoURL" />
        </q-avatar>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">{{ usuario.displayName }}</div>
        <div class="text-subtitle2">{{ usuario.email }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn
          color="primary"
          label="Logout"
          push
          size="sm"
          @click="cerrarSesion"
        />
        <q-btn to="/perfil" color="secondary" label="Perfil" push size="sm" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { auth, provider } from "src/boot/firebase";
import { signInWithRedirect, getRedirectResult, signOut } from "firebase/auth";

const usuario = ref(null);

function iniciarSesion() {
  signInWithRedirect(auth, provider);
}

function cerrarSesion() {
  signOut(auth)
    .then(() => {
      usuario.value = null;
    })
    .catch((error) => {
      console.log(error);
      usuario.value = null;
    });
}

onMounted(() => {
  if (auth.currentUser) {
    usuario.value = auth.currentUser;
  }

  getRedirectResult(auth)
    .then((result) => {
      const user = result.user;
      console.log(user);
      usuario.value = user;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style lang="scss" scoped></style>
