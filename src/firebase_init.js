// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx6KUfjB46Th5UuyuDhOIEYThpWfcIWto",
  authDomain: "auth-milon-mela-ef63c.firebaseapp.com",
  projectId: "auth-milon-mela-ef63c",
  storageBucket: "auth-milon-mela-ef63c.firebasestorage.app",
  messagingSenderId: "279439301518",
  appId: "1:279439301518:web:bb5844ee30416a7aa9a2df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth