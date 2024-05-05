// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKDoWjC-Jug_rIF9o-kzsGdp1cyIucghA",
  authDomain: "experimental-app-4df11.firebaseapp.com",
  projectId: "experimental-app-4df11",
  storageBucket: "experimental-app-4df11.appspot.com",
  messagingSenderId: "944879687386",
  appId: "1:944879687386:web:b25ebfb2317d90d90737e3",
  measurementId: "G-5Q6DCBCV50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { firebaseConfig, app, analytics };
