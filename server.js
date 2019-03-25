const express = require("express");

const app = express();
const appPort = 3000;

app.get("/",(req,res) => {
    res.json({"message": "Welcome to insured-payment-app!"});
})

const server = app.listen(appPort, () => {
    console.log("Server is listening on port "+appPort);
});