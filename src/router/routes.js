const routes = [
  {
    path: "/",
    component: () => import("layouts/LayoutsDos.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "componentes",
        component: () => import("pages/ComponenteVue.vue"),
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/LayoutsDos.vue"),
    children: [
      { path: "holamundo", component: () => import("pages/HolaMundo.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/LayoutsDos.vue"),
    children: [
      { path: "perfiles", component: () => import("pages/PerfilesVue.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/LayoutsDos.vue"),
    children: [
      { path: "pinia", component: () => import("pages/PiniaVue.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/LayoutsDos.vue"),
    children: [
      { path: "local", component: () => import("pages/LocalStorageVue.vue") },
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
