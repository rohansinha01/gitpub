const express = require("express")
const drinks = require("./models/drinks.js")
const app = express()


app.use(express.static("public"))
//Is there a way to add styling to this first page "/"? I can't seem to get anything outside of hyperlinking it.
app.get('/', (req,res) => {
    res.send(`<h1><a href="/drinks">'Welcome to the Gitpub App!'</a></h1>`)
    
})

app.get("/drinks", (req,res) => {
    res.render("index.ejs", {drinks})
})

app.get("/drinks/:id", (req,res) => {
    const id = req.params.id
    const drink = drinks[id]
    res.render("show.ejs", {drink})
})
app.listen(3000, () => {console.log("Welcome to the Gitpub App!")})
