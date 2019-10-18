import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyAJPqtFameEsjj7xy1yIhpyo83SZF32OZo",
    authDomain: "react-hackathon-55981.firebaseapp.com",
    databaseURL: "https://react-hackathon-55981.firebaseio.com",
    projectId: "react-hackathon-55981",
    storageBucket: "react-hackathon-55981.appspot.com",
    messagingSenderId: "740022371817",
    appId: "1:740022371817:web:0f18640def00206748b778",
    measurementId: "G-FG5K52JG5J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase


