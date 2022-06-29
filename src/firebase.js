import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQyyVP3frA_ZAKsga5BX-Mu6r-CAB17dc",
  authDomain: "disney-plus-clone2.firebaseapp.com",
  projectId: "disney-plus-clone2",
  storageBucket: "disney-plus-clone2.appspot.com",
  messagingSenderId: "62923930205",
  appId: "1:62923930205:web:1b63e2e7f977e64ef66bb4",
  measurementId: "G-J7PKDDTX2T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;