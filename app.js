const express = require('express')
const app = express() 
const path = require('path')
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})
app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Escuchando en el servidor' + port)
})  
/* app.listen(3000, () => {
    console.log("Escuchando en el servidor 3000")
}) */

 
