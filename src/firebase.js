import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCnahY6ktchW5staGBZNGjbxf72YXruZyQ',
  authDomain: 'poradnik-6eee8.firebaseapp.com',
  databaseURL: 'https://poradnik-6eee8.firebaseio.com',
  projectId: 'poradnik-6eee8',
  storageBucket: 'poradnik-6eee8.appspot.com',
  messagingSenderId: '400344982453',
  appId: '1:400344982453:web:80eccacc2d25ec7ed4affc',
  measurementId: 'G-WNR6JVHY1C',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
