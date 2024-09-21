const express = require('express');
const Model = require('../models/usermodels');
const { model } = require('mongoose');
const router = express.Router()
const jwt = require("jsonwebtoken")
require('dotenv').config();


router.post('/add',(req,res) =>{
    // res.send("response from add user")
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        if (err.code == 11000) {
        res.status(500).json({message:"Email already exists"})
            
        }else{
            res.status(500).json({message:"Something went wrong"})

        }
        
    });
})


router.get('/getall',(req,res) =>{
    Model.find()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
        
    })
})

router.get("/getbyemail/:email",(req,res)=>{
    Model.findOne({email:req.params.email})
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
        
    })
})




// : denotes url parameter
router.get('/getbyid/:id',(req,res) =>{
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
        
    })
})





router.delete('/delete/:id',(req,res) =>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
        
    })
})




router.put("/update/:id",(req,res) => {
    Model.findByIdAndUpdate(req.params.id , req.body)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
        
    })
})



router.post('/authenticate',(req,res) => {
    Model.findOne(res.body)
    .then((result) => {
        if (result) {
            // generate token
            const {_id, name, email, password} = result;

        const payload = {_id, name,email,password}        
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn:3600},
            (err,token) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err)
                }else{
                    res.status(200).json({token})
                }
            }
        )
        }else{
            res.status(401).json({message:"Invalid credentials"})
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err)
        
    })
})




module.exports = router;