import  * as firebase from 'firebase';
import '@firebase/auth';
const config= {
  apiKey: "AIzaSyBjOs3ighmmnr0qEVOqNgm1XOpdaYqZIsc",
  authDomain: "kion-80d7f.firebaseapp.com",
  databaseURL: "https://kion-80d7f.firebaseio.com",
  projectId: "kion-80d7f",
  storageBucket: "kion-80d7f.appspot.com",
  messagingSenderId: "193729941299",
  appId: "1:193729941299:web:36751e5d1650b59f25f846",
  measurementId: "G-FPQ46620KV"
};

  // Initialize Firebase
const appdata = firebase.initializeApp(config);
export default appdata