const Collection = require('./../model/Collection.js');
const newCollection = new Collection();
const express = require('express');

const router = express.Router();
router.post('/', async (req, res) => {
    const {nameCollection} = req.body;
    let msg = null;
    const statusCode = await newCollection.createCollection(nameCollection);
    if(statusCode == 201) {
        msg = `collection with name '${nameCollection}' created successfully`
    }else{
        msg = `error when creating collection with name '${nameCollection}'`
    }

    res.status(statusCode).json({
        statusCode: statusCode,
        msg: msg
    })
})

module.exports = router;