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

    dropCollection(idCollection) {
        return new Promise((resolve, reject) => {

            pool.execute("SELECT * FROM collections WHERE id_collection = ?", [idCollection], (err, result) => {
                if(err) {
                    console.log(`Error while searching for collection with id ${idCollection}:`, err)
                    resolve(500);
                }else{
                    if(result.length == 0) {
                        resolve(404);
                    }else{
                        pool.execute(`DELETE FROM collections WHERE id_collection = ?`, [idCollection], (err, result) => {
                            if(err) {
                                console.log(`Error where deleting collection with id is ${idCollection}:`, err)
                                resolve(500);
                            }else{
                                resolve(200);
                            }
                        })
                    }
                }
            })
        })
    }

}

module.exports = Collection