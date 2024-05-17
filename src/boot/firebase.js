import { boot, route } from "quasar/wrappers";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { VueFire } from "vuefire";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh9v2vQB3FAE-SCZioZsKwxfJl--sICuE",
  authDomain: "proyecto1-74081.firebaseapp.com",
  projectId: "proyecto1-74081",
  storageBucket: "proyecto1-74081.appspot.com",
  messagingSenderId: "403687295255",
  appId: "1:403687295255:web:4484a3cf1df9933d4e0f52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
auth.languageCode = "es";
const provider = new GoogleAuthProvider();

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router }) => {
  app.use(VueFire, {
    // imported above but could also just be created here
    app,
    modules: [
      // we will see other modules later on
      // VueFireAuth(),
    ],
  });

  router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    const rutaProtegida = to.matched.some((record) => record.meta.requiresAuth);
    const user = auth.currentUser;

    if (rutaProtegida === true && user === null) {
      next("/login");
      console.log("No hay login activo ");
    } else {
      next();
    }
  });
  // something to do
});

export { db, auth, provider };
