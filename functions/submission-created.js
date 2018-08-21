/* Triggered when a form submission is posted to your site. */
var initDB = require('../utils/storage')

exports.handler = function(event, context, callback) {
  var db = initDB()
  var newPostKey = db.ref().child('submissions').push().key;
  db.ref(`submissions/${newPostKey}`).set({
    ...this.form
  });
  return callback(null, {
    statusCode: 200,
    body: "Beep, boop, you just got serverless."
  })
}