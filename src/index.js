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

app.get('/api/email/:id', (req, res) => {
  const id = req.params.id
  const user = users.find(x => x.id === parseInt(id));

  if (user) {
    // Envoi uniquement de l'email
    res.send({ email: user.email, password: user.password });
  } else {
    // Gestion du cas où l'utilisateur n'est pas trouvé
    res.status(404).send({ error: "Utilisateur non trouvé" });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})