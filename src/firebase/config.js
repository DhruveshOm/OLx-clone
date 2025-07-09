import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCggZCcBun0cwNfOWGC2K8pZcgIRWMfqwY",
    authDomain: "olx-sijeesh.firebaseapp.com",
    projectId: "olx-sijeesh",
    storageBucket: "olxx-d731d.appspot.com",
    messagingSenderId: "767411886432",
    appId: "1:767411886432:web:2ef6862afc88f2c423a605",
    measurementId: "G-4ELNR9DJHL"

  };

const app = firebase.initializeApp(firebaseConfig);
export const Firebase = app;