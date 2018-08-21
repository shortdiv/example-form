/* Triggered when a form submission is posted to your site. */
import firebase from "firebase";
import "firebase/storage";

exports.handler = function(event, context, callback) {
  var config = {
    apiKey: `${process.env.VUE_APP_API_KEY}`,
    authDomain: `${process.env.VUE_APP_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.VUE_APP_DB_NAME}.firebaseio.com`,
    storageBucket: `${process.env.VUE_APP_BUCKET}.appspot.com`,
    messagingSenderId: `${process.env.VUE_APP_SENDER_ID}`
  };

  firebase.initializeApp(config);

  var db = firebase.database();

  var newPostKey = db.ref().child(`${this.form.chosenRice}`).push().key;
  db.ref(`${this.form.chosenRice}/${newPostKey}`).set({
    ...this.form
  });
  return callback(null, {
    statusCode: 200,
    body: "Beep, boop, you just got serverless."
  })
}