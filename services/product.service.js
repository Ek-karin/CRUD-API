const db = require(`../database/db`);

// READ
exports.getAllProducts = (req,res) => {
        db.serialize(() => {
        db.all(`SELECT * FROM product`, (err,rows) => {
            if(err){
                res.send(`Error encountered while displaying`);
                return console.error(err.message);
            }
            res.send(rows);
            console.log(`Entry displayed successfully`);
        })
    })
}

// CREATE
exports.insertProduct = (req, res) => {
    db.serialize(() => {
        db.run(`INSERT INTO product(product_name,product_category) VALUES(?, ?)`, [req.body.product_name, req.body.product_category], err => {
            if(err){
                res.send(err.message);
                return console.error(err.message);
            }
            res.send("Success");
            console.log(`Row was added to the table`);
            })
    })
}

// DELETE
exports.deleteProduct = (req,res) => {
    db.serialize(() => {
        db.run(`DELETE FROM product WHERE product_id = ?`,[req.params.id], (err) => {
            if(err){
                res.send(`Error encountered while deleting.`);
                return console.log(err.message);
            }
            res.send(`Entry deleted.`);
            console.log(`Entry deleted.`);
        })
    })
}

// UPDATE
exports.updateProduct = (req,res) => {
    db.serialize(() => {
        db.run('UPDATE product SET product_name = ?, product_category = ? WHERE product_id = ?',[req.body.product_name,req.body.product_category, req.body.product_id], err => {
            if(err){
                res.send(`Error encounterd while updating.`);
                console.error(err.message)
            }
            res.send(`Entry update successfully.`);
            console.log(`Entry update successfully.`);
        })
    })
}
