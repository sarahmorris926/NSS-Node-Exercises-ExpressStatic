const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send('Hello World - go to localhost:8080/index.html to see a cat?')
})

app.use(express.static('public'))


app.use( (err, req, res, next) => {
  // all errors go to here
  res.status(err.status || 500)
  res.json({
      message: "Error error error!",
      err: err.message
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
