import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5q4WEuBPjuQ9NDJz7184uoGG8sHYFyP0",
  authDomain: "fir-tutorial-b4dd2.firebaseapp.com",
  projectId: "fir-tutorial-b4dd2",
  storageBucket: "fir-tutorial-b4dd2.appspot.com",
  messagingSenderId: "1085835678167",
  appId: "1:1085835678167:web:4f5f7f7e9a65cf2f7cfb92"
};

export const app = initializeApp(firebaseConfig);