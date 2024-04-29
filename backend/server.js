const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./models/Register')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/axis');

app.post('/register', (req, res) => {
    const{user_name, first_name, last_name, email, mobile, password} = req.body;
    RegisterModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("alredy exists")
            window.alert("user alredy exits")
        }else{
            RegisterModel.create({user_name:user_name, first_name:first_name, last_name:last_name, email:email, mobile:mobile, password:password})
            .then(result => res.json("acc created"))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})

app.listen(3001,() => {
    console.log("server running")
})


