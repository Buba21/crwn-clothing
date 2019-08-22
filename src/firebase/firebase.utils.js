import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2Fb2ik_QBl0sB7pLrn7o_Cjfs5NBh5CA",
    authDomain: "crwn-db-2a827.firebaseapp.com",
    databaseURL: "https://crwn-db-2a827.firebaseio.com",
    projectId: "crwn-db-2a827",
    storageBucket: "",
    messagingSenderId: "186597574240",
    appId: "1:186597574240:web:1cf06ad3cade61d8"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;