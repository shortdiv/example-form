/* Triggered when a form submission is posted to your site. */
exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body)
  console.log(body)
  return callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
  // var newPostKey = db.ref().child(`${this.form.chosenRice}`).push().key;
  // db.ref(`${this.form.chosenRice}/${newPostKey}`).set({
  //   ...this.form
  // })
  // .then(() => {
  //   console.log('saved')
  //   return callback(null, {
  //     statusCode: 200,
  //     body: "Beep, boop, you just got serverless."
  //   })
  // })
  // .catch((err) => {
  //   console.log('failed')
  //   return callback(null, {
  //     statusCode: error.status,
  //     body: JSON.stringify({
  //       message: error.message,
  //       error: error,
  //     })
  //   })
  // })
}