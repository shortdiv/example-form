/* Triggered when a form submission is posted to your site. */
import firebase from "firebase";
import "firebase/storage";

var config = {
  apiKey: `${process.env.VUE_APP_API_KEY}`,
  authDomain: `${process.env.VUE_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_DB_NAME}.firebaseio.com`,
  storageBucket: `${process.env.VUE_APP_BUCKET}.appspot.com`,
  messagingSenderId: `${process.env.VUE_APP_SENDER_ID}`
};

firebase.initializeApp(config);
const db = firebase.database();

exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body).payload
  var newPostKey = db.ref().child(`submissions`).push().key;
  db.ref(`submissions/${newPostKey}`).set({
    ...body.data,
    data: body.created_at
  })
  .then(() => {
    console.log('saved')
    return callback(null, {
      statusCode: 200,
      body: "Beep, boop, you just got serverless."
    })
  })
  .catch((err) => {
    console.log('failed')
    return callback(null, {
      statusCode: error.status,
      body: JSON.stringify({
        message: error.message,
        error: error,
      })
    })
  })
}