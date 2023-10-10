const express = require('express');
// const { Model } = require('mongoose');
const Model = require('../models/FurnitureModel')

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) =>{
        res.json(result);
    }).catch((err) =>{
        console.log(err);
        res.json(err);
    })
});

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) =>{
        res.json(result)
    }).catch((err) =>{
        res.json(err);
    })
});

router.get('/getbysize/:brand', (req, res) => {
    console.log(req.params.size);
    Model.find({size : req.params.size})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err);
        })
});
router.get('/getbybrand/:material', (req, res) => {
    console.log(req.params.brand);
    Model.find({brand : req.params.brand})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err);
        })
});
router.get('/getbycategory/:price', (req, res) => {
    console.log(req.params.category);
    Model.find({category : req.params.category})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err);
        })
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    })
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    }) 
});

module.exports = router;