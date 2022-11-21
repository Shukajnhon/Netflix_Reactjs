//
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDWz04jZWY90qSesAmODtr1p0WjOWXI-OA",
    authDomain: "netflix-reactjs-3b8c6.firebaseapp.com",
    projectId: "netflix-reactjs-3b8c6",
    storageBucket: "netflix-reactjs-3b8c6.appspot.com",
    messagingSenderId: "1033797353244",
    appId: "1:1033797353244:web:186b9e245e493436b7c4d9",
    measurementId: "G-CNGR0MD7RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app)

// web: https://console.firebase.google.com/u/0/project/netflix-reactjs-3b8c6/overview