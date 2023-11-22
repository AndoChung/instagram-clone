
const express = require('express')
const app = express();

const loginRoute = require("./Routes/Login")

app.use("/login", loginRoute)
  

app.listen(3000, () => {
    console.log("Server on port 3000")
})