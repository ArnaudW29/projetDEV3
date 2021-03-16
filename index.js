  
const express = require("express")
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static('public'))

app.listen(process.env.PORT || 5000)
