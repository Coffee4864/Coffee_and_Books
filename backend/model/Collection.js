const pool = require('./../dbConnect.js');

class Collection{

    createCollection(nameCollection) {
        return new Promise((resolve, reject) => {
            pool.execute(`INSERT INTO collections VALUES (default, ?)`, [nameCollection], (err, result) => {
                if(err) {
                    console.log(`error when creating collection with name '${nameCollection}':`, err)
                    resolve(500)
                }else{
                    console.log(`collection with name '${nameCollection}' created successfully`)
                    resolve(201)
                }
            })
        })
    }

}

module.exports = Collection