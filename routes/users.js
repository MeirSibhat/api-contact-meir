const express = require('express');
const { userModel } = require('../models/userModel');
const router = express.Router();


router.get('/all', (req, res) => {
    userModel.find({}).sort({ date: 'desc' }).then(data => {
        res.json(data)
    })
})

router.post('/add', async (req, res) => {
    console.log(req.body)

    try {
        let newDat = await userModel.insertMany([req.body]);
        let sendBack = await userModel.find({})
        res.json(sendBack)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
})
router.post('/edit', async (req, res) => {
    console.log(req.body)
    let item = req.body;
    try {
        let itemUpdate = await userModel.findByIdAndUpdate(item.id, {
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
            phone: item.phone,
            areaCode: item.areaCode
        });

        if (itemUpdate.err){
        console.log("err");
        res.json(err)
        }

        let sendBack = await userModel.find({})
        res.json(sendBack)

    } catch (error) {
        console.log(error);
        res.json(error)
    }
})
module.exports = router;