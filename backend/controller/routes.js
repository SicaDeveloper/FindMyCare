
const express = require("express");
const router = express.Router();


router.post("/",(req,res)=> {
    res.send("HelloWorld");
})

router.post("/login",(req,res) => {
    res.json({ login : true, token : "1234567890" , tokenType : "Bearer" , expiresIn : 3600});
})

router.post("/register",(req,res) => {
    res.json({ register : true, user: {email: req.body.email, password : req.body.password, role : req.body.role} });
})

router.post("/login", (req, res) => {
    res.json({ login: true });
});

router.get("/profile", (req, res) => {
    res.json({ profile: true, });
});

module.exports = router;