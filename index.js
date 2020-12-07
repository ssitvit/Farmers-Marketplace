require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const session = require('express-session')

//Route imports
const userRouter = require('./routes/user')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const viewsPath = path.join(__dirname, "./views")
const partialsPath = path.join(__dirname, "./views/partials")

//Set EJS as view engine
app.use(expressLayouts)
app.set("view engine", "ejs")
app.set("views", viewsPath)

//set static path for CSS, images, js files
app.use(express.static("public"))

//Cookies
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60000 }
}))

//Routes definition
app.use('/api/user', userRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
})