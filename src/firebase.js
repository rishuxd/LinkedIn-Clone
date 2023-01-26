import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9wAXuBULzGc_nlGD6RgC-0APinXSsEIo",
  authDomain: "linkedin-clone-8d5aa.firebaseapp.com",
  projectId: "linkedin-clone-8d5aa",
  storageBucket: "linkedin-clone-8d5aa.appspot.com",
  messagingSenderId: "920516156212",
  appId: "1:920516156212:web:5fdf5262f10b74cd5c6361",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
