import firebase from 'firebase'

  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyALccF3zhcZEXqzVEfJkUSokmopI29bACk",
    authDomain: "todo-app-cp-d7520.firebaseapp.com",
    projectId: "todo-app-cp-d7520",
    storageBucket: "todo-app-cp-d7520.appspot.com",
    messagingSenderId: "1092424578465",
    appId: "1:1092424578465:web:70e4f1c1f3e7ef3c9d07e0",
    measurementId: "G-HTJ8RPH9DJ"

  });

  const db= firebaseApp.firestore();
 

  export default db;