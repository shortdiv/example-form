import firebase from "firebase";
import "firebase/storage";

export default function () {
  var config = {
    apiKey: `${process.env.VUE_APP_API_KEY}`,
    authDomain: `${process.env.VUE_APP_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.VUE_APP_DB_NAME}.firebaseio.com`,
    storageBucket: `${process.env.VUE_APP_BUCKET}.appspot.com`,
    messagingSenderId: `${process.env.VUE_APP_SENDER_ID}`
  };

  firebase.initializeApp(config);

  return firebase.database();
}
