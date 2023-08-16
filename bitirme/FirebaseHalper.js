
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOKj5heLy_b_u1XgKUv8T_6-1k1bABHXM",
  authDomain: "webprojesi-2bd44.firebaseapp.com",
  databaseURL: "https://webprojesi-2bd44-default-rtdb.firebaseio.com",
  projectId: "webprojesi-2bd44",
  storageBucket: "webprojesi-2bd44.appspot.com",
  messagingSenderId: "800317677706",
  appId: "1:800317677706:web:c6dd4dc765a629bd084d73",
  measurementId: "G-LZSJM8GQ5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  db = firebase.database();
  db.ref("hastane").set("sero");
