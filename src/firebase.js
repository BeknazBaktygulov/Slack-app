import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBmoH8Ajf_r0pEja31v3g-jD27L02VOpJI",
    authDomain: "slack-6bf74.firebaseapp.com",
    projectId: "slack-6bf74",
    storageBucket: "slack-6bf74.appspot.com",
    messagingSenderId: "667866725254",
    appId: "1:667866725254:web:83b2139978b072d3c3ca07"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = 