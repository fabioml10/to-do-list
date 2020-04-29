const express = require('express')

const app = express();

//middleware que manda json para o express
app.use(express.json())

const log = (req, res, next) => {
  console.log(req.body)
  console.log(`Data: ${Date.now()}`)
  next()
}

app.use(log)

app.get('/', (req, res) => {
  res.send("<h1>ToDo List</h1>")
})

app.get('/json', (req, res) => {
  res.json({ title: "TarefaX", done: true })
})

app.listen(3000, () => {
  console.log("Server started.")
})