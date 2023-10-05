
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAG3USLHqkpJtcnK3kCwMRxh_fprhLuLjs",
  authDomain: "devheat-71218.firebaseapp.com",
  projectId: "devheat-71218",
  storageBucket: "devheat-71218.appspot.com",
  messagingSenderId: "123921190348",
  appId: "1:123921190348:web:d01bbd4d51ac8ab538a169",
  measurementId: "G-6D2V0WH9ZH"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
