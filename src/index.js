const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
const users = require('./data/users.json');

app.get('/api', (req, res) => {
  res.send(users)
})

app.get('/api/:id', (req, res) => {
  const id = req.params.id
  console.log("ID ", id);
  res.send(users.find(x => x.id === parseInt(id)));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})