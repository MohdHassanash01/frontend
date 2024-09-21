const express = require('express');
const Model = require('../models/propertyModel');
const { model } = require('mongoose');
const router = express.Router()


router.post('/add',(req,res) =>{
    // res.send("response from add user")
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
        
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

router.get("/getbyid/:id",(req,res)=>{
    Model.findOne({id:req.params.id})
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





// Update user by ID
router.put('/update/:id', (req, res) => {
    const updateData = req.body; // Data to update from the request body

    Model.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true })
        .then((updatedUser) => {
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while updating the user' });
        });
});

module.exports = router;


 


