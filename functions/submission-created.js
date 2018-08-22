/* Triggered when a form submission is posted to your site. */
exports.handler = function(event, context, callback) {
  console.log('event', event)
  console.log('context', context)
  new Promise((resolve, reject) =>{
    setTimeout(resolve, 100, context)
  })
  .then((t) => {
    console.log('saved')
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(t)
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