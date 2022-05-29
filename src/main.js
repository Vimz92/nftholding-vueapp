
import { createApp } from "vue";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import App from "./App.vue";
import router from "./router";


const firebaseConfig = {
  apiKey: "AIzaSyBkjd4YYTA3BlctOykJXcL9t1nlUU3O_a0",
  authDomain: "nftholding-1239d.firebaseapp.com",
  projectId: "nftholding-1239d",
  storageBucket: "nftholding-1239d.appspot.com",
  messagingSenderId: "279272881928",
  appId: "1:279272881928:web:ac9890b55a347f0e5376bd",
  measurementId: "G-9KZFR1HBQY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
.use(router)
.mount("#app");