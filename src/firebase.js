import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCY76jNgU9NBq7meeU7QzgH6o6eEjXNr7A",
  authDomain: "carvix-ab30c.firebaseapp.com",
  projectId: "carvix-ab30c",
  storageBucket: "carvix-ab30c.firebasestorage.app",
  messagingSenderId: "84789152708",
  appId: "1:84789152708:web:05d01274cce03c00d6b291",
  measurementId: "G-CRDH2JRN5Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);