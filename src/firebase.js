import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC6skMfqG-JqZMY3SfHpArw09WK98ZRfUU",
    authDomain: "twitter-clone-dc1d8.firebaseapp.com",
    projectId: "twitter-clone-dc1d8",
    storageBucket: "twitter-clone-dc1d8.appspot.com",
    messagingSenderId: "439255314169",
    appId: "1:439255314169:web:1669cbc02b3c921500bc28",
    measurementId: "G-BWG0VJWQ6H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;