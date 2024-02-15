// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO0Z9QhOiKwZGBl9KBoWWUsaWF4Y_roDU",
  authDomain: "gettingstarted-d9c78.firebaseapp.com",
  projectId: "gettingstarted-d9c78",
  storageBucket: "gettingstarted-d9c78.appspot.com",
  messagingSenderId: "681699785945",
  appId: "1:681699785945:web:64682e86b471b23b1a52c8",
  measurementId: "G-0HH8CRM5J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app.name)