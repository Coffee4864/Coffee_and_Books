const Collection = require('./../model/Collection.js');
const newCollection = new Collection();
const express = require('express');

const router = express.Router();
router.post('/', async (req, res) => {

    const {idCollection} = req.body;

    let msg = null;

    const statusCode = await newCollection.dropCollection(idCollection)

    if(statusCode == 200) {
        msg = `Collection with id ${idCollection} was successfully deleted`
    }else if(404){
        msg = `Collection with id ${idCollection} is not found`
    }else{
        msg = `Error while trying delete collection with id ${idCollection}`;
    }

    res.status(statusCode).json({msg: msg, statusCode: statusCode})

})

module.exports = router;