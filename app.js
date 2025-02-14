const express = require('express')
const path = require('path')

const app = express()
const port = 3000

//app.use(cors("https://localhost:3000/"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
  })
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "./home.html"))
  })
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "./about.html"))
  })
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, "./form.html"))
  })
app.get('/grassTop', (req, res)=>{
  res.sendFile(path.join(__dirname, "./GrassTop.png"))
})
app.get('/grassSide', (req, res)=>{
  res.sendFile(path.join(__dirname, "./GrassSide.png"))
})
app.get('/grassBottom', (req, res)=>{
  res.sendFile(path.join(__dirname, "./GrassBottom.png"))
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})