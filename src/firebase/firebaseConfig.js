import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    // apiKey: "AIzaSyAIyc_mDy4fc7SghKGgUEoOTBf0wGIv8go",
    // authDomain: "magno-ecommerce.firebaseapp.com",
    // projectId: "magno-ecommerce",
    // storageBucket: "magno-ecommerce.appspot.com",
    // messagingSenderId: "660728166631",
    // appId: "1:660728166631:web:a4e0fd0a943cfed1e68a42"

    // Reemplazo de datos por variables de entorno

    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
