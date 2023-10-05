const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
});
router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

// findone and find me ye difference hai ki findone me nhi milne pr null atta hai jbki find []
// then run krta hai jb data successful hota hai jbki catch when nhi milta 

// : denote url parameter
router.get('/getbyemail/:email',(req,res) => {
    console.log(req.params.email);
    Model.findOne({email : req.params.email})
    .then((result) => {
    res.json(result);
}).catch((err) => {
res.json(err);
});
});

router.get('/getbycity/:city',(req,res) => {
    console.log(req.params.city);
    Model.find({city : req.params.city})
    .then((result) => {
    res.json(result);
}).catch((err) => {
res.json(err);
});
});


router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result) =>{
        res.json(result);
    }).catch((err) =>{
        res.json(err);
    });
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id,req.body, {new: true})
    .then((result) =>{
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

router.post('/authenticate' , (req, res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result)res.json(result)
        else res.status(400).json({message : "Login Failed"});
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    });
})

module.exports = router;
