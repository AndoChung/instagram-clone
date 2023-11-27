
const express = require('express')
const app = express();
const cors = require('cors')

const path = require('path')
const fs = require("fs")

app.use(cors({origin:true, credentials: true}));



const loginRoute = require("./Routes/Login")
const homeRoute = require("./Routes/Home")


app.use("/home", homeRoute)
app.use("/login", loginRoute)


app.listen(3000, () => {
    console.log("Server on port 3000")
})