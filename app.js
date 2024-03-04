const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('GET request\n')
})

app.post('/', (req, res) => {
    res.send('POST request\n')
})

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    res.send("iz secreta")
    next()
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Slusa se port ${port}`)
})