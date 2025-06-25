const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./controller/routes");

dotenv.config();

app.use(cors());
app.use("/", routes);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(3000, () => {
            console.log("Connected");
        });
    });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send("Hello World!");
});

app.post("/",(req,res)=> {
    res.send("HelloWorld");
})

app.post("/login",(req,res) => {
    res.json({ login : true, token : "1234567890" , tokenType : "Bearer" , expiresIn : 3600});
})

app.post("/register",(req,res) => {
    res.json({ register : true});
})

