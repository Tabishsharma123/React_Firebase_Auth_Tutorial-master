import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo54KY29oAdi6SwTXmBO9GmeO_yPunLAk",
  authDomain: "reactform-e5ab4.firebaseapp.com",
  projectId: "reactform-e5ab4",
  storageBucket: "reactform-e5ab4.appspot.com",
  messagingSenderId: "514806813799",
  appId: "1:514806813799:web:6530f1f538d10f4aa630c2",
  measurementId: "G-CMYXZBBR96"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;