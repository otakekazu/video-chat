import firebase from 'firebase/app'
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyC6h8LnL-Eo6d4_IkNEaeVAEpdytt-GaWw",
  authDomain: "otake-blog.firebaseapp.com",
  projectId: "otake-blog",
  storageBucket: "otake-blog.appspot.com",
  messagingSenderId: "802861157695",
  appId: "1:802861157695:web:e27f0586ccd7249ac7d78a",
  measurementId: "G-766TDWYHC1"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()