import "@/styles/globals.css";
import firebase from "firebase/app";
import "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCtI1g-BlodaG9m4RQAp-aG-TF5TeOzmhQ",
  authDomain: "mock-draft-63909.firebaseapp.com",
  projectId: "mock-draft-63909",
  storageBucket: "mock-draft-63909.appspot.com",
  messagingSenderId: "840991871220",
  appId: "1:840991871220:web:ba02fafff5fe649a78cea1",
  measurementId: "G-BJRL937XZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// if (!firebase.apps.length) {
// firebase.initializeApp(firebaseConfig);
// }

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
