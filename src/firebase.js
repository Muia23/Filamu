import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBU8_igzF8moxXCd-lHoTTOIPLg1FdeTWg",
    authDomain: "filamu-a85c0.firebaseapp.com",
    projectId: "filamu-a85c0",
    storageBucket: "filamu-a85c0.appspot.com",
    messagingSenderId: "540269306890",
    appId: "1:540269306890:web:35bbf91da5326ef11d6bf3",
    measurementId: "G-LRGR29WGKS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;