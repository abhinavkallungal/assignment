  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  import { getAuth, } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCO958GOx-_bYP-zXH-k4kQHPUaU_coCYo",
    authDomain: "assignment-c4726.firebaseapp.com",
    projectId: "assignment-c4726",
    storageBucket: "assignment-c4726.appspot.com",
    messagingSenderId: "759842651592",
    appId: "1:759842651592:web:7921ea83db935bf166d4fd",
    measurementId: "G-0ZKLB2S4JJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
