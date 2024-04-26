const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "holamundo", component: () => import("pages/HolaMundo.vue") },
      { path: "estilos", component: () => import("pages/EstilosyClases.vue") },
      { path: "ifshow", component: () => import("pages/ShowIf.vue") },
      { path: "eventos", component: () => import("pages/EventosVue.vue") },
      { path: "ciclo", component: () => import("pages/CicloVida.vue") },
      { path: "watches", component: () => import("pages/WatcheVue.vue") },
      {
        path: "componentes",
        component: () => import("pages/ComponenteVue.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
