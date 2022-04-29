const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://egis:egis0700@boilerplate.uuur9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology : true}).then(()=> console.log("MongDB Connected...")).catch(err => console.log(err))  

app.get('/', (req, res) => {
  res.send('Hello World! 안녕 안녕')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})