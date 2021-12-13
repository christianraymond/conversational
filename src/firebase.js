import firebase from 'firebase';

const config = firebase.initializeApp({
    apiKey: "AIzaSyAULwsVgM3xC3sVYlZhmtbm01Drbl6Ib4A",
    authDomain: "messaging-project-b6128.firebaseapp.com",
    projectId: "messaging-project-b6128",
    storageBucket: "messaging-project-b6128.appspot.com",
    messagingSenderId: "1080076585701",
    appId: "1:1080076585701:web:effd5efe8ffa9a6e7c220c",
    measurementId: "G-GRX6HLEFNJ"
})

const db = config.firestore();
const auth = firebase.auth();

export { db, auth}
