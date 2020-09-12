import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAl25nN2ylL4cXyrgLKZNp2B4X-E9VmNZE",
  authDomain: "challenge-e9ec1.firebaseapp.com",
  databaseURL: "https://challenge-e9ec1.firebaseio.com",
  projectId: "challenge-e9ec1",
  storageBucket: "challenge-e9ec1.appspot.com",
  messagingSenderId: "632075794675",
  appId: "1:632075794675:web:24279e1459ca646940df86",
  measurementId: "G-QBFLTYEB2D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }