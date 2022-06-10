import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getfirestore } from 'firebase/firestore';

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

export const db = getFirestore(app);