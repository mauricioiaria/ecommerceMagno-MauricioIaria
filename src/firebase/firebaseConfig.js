import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

    apiKey: "AIzaSyAIyc_mDy4fc7SghKGgUEoOTBf0wGIv8go",
    authDomain: "magno-ecommerce.firebaseapp.com",
    projectId: "magno-ecommerce",
    storageBucket: "magno-ecommerce.appspot.com",
    messagingSenderId: "660728166631",
    appId: "1:660728166631:web:a4e0fd0a943cfed1e68a42"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);