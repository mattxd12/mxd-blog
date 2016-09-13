const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('link-to-mongodb', (err, database) => {
  if (err) return console.log(err)
    db = database
    app.listen(3000, () => {
      console.log('listening on 3000')
})

app.post('/users', (req, res) => {
  db.collection('users').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})
