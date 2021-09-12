import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyCwPbnb-xBzNZhWLCAsbYOPfTXRER8WyS8",
  authDomain: "disney-plus-clone-3e959.firebaseapp.com",
  projectId: "disney-plus-clone-3e959",
  storageBucket: "disney-plus-clone-3e959.appspot.com",
  messagingSenderId: "498667851476",
  appId: "1:498667851476:web:29910f496ffb634c57b541",
  measurementId: "G-ZJSN2TRQSJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;