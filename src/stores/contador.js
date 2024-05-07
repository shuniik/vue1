import { defineStore } from "pinia";
import { Notify } from "quasar";

export const useContadorStore = defineStore("contador", {
  state: () => ({
    contador: 0,
  }),

  getters: {
    doubleCount(state) {
      return state.contador * 2;
    },
  },

  actions: {
    incrementar() {
      this.contador++;
    },

    limpiar() {
      this.contador = 0;
      Notify.create("Limpiando contador");
    },
  },
});
