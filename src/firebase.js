import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDM8tM1tlMdZi03n-CXQYLwL1iafkvxRb8",
    authDomain: "disney-ah56.firebaseapp.com",
    projectId: "disney-ah56",
    storageBucket: "disney-ah56.appspot.com",
    messagingSenderId: "462747874018",
    appId: "1:462747874018:web:772725a3f7846d327624bb"
  };
  


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider }