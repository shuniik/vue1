import { boot } from "quasar/wrappers";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});

export { db };
