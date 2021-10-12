import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC2mYsRBvn7osvm1OE5h-y35IoGUptdLoo",
    authDomain: "linkedin-clone-ea9b2.firebaseapp.com",
    projectId: "linkedin-clone-ea9b2",
    storageBucket: "linkedin-clone-ea9b2.appspot.com",
    messagingSenderId: "978539993957",
    appId: "1:978539993957:web:1e380d31f98797ff54df8c"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();

  export {db}