const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
app.use(cors())


const Chef = require('./data/Chef.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chef' , (req, res) =>{
  res.send(Chef)
})

app.get('/chef/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const ChefDetails = Chef.find(data => parseInt(data.id) === id);
  res.send(ChefDetails)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

