const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello World!',
  })
})

app.listen(process.env.PORT ||port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})