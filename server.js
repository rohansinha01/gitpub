const express = require("express")
const drinks = require("./models/drinks.js")
const app = express()


app.use(express.static("public"))

app.get('/', (req,res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req,res) => {
    res.render("index.ejs", {drinks})
})

app.get('drinks/:id', (req,res) => {
    const id = req.params.id
    res.send(id)
})
app.listen(3000, () => {console.log("Welcome to the Gitpub App!")})
