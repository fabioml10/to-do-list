const express = require('express')
const checkListRouter = require('./src/routes/checklist')

const app = express();

//middleware que manda json para o express
app.use(express.json())

app.use('/checklists', checkListRouter)

app.listen(3000, () => {
  console.log("Server started.")
})