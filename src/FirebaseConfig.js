import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getfirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmHLpbeGG9NsvZlJQhXuo_Ut1lnX4iHmE",
  authDomain: "hifixit-66d2b.firebaseapp.com",
  databaseURL: "https://hifixit-66d2b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hifixit-66d2b",
  storageBucket: "hifixit-66d2b.appspot.com",
  messagingSenderId: "547830533596",
  appId: "1:547830533596:web:acbf37409b728ad4d6d319",
  measurementId: "G-YTG5XVCZR0"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};

const logout = () => {
  signOut(auth);
};

const getCurrUser = async () =>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
    }
  });
}


export {
  auth,
  db,
  logInWithEmailAndPassword,
  logout,
  getCurrUser
};