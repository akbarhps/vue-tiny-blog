import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  // paste your firebase config here
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp }