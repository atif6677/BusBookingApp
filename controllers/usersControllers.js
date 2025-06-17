const db = require('../utils/db-connection');


const addEntries=(req,res)=>{
const {id,name,email}=req.body;

const insertQuery = `INSERT INTO Users (id, name,email) VALUES (?, ?, ?)`;

db.execute(insertQuery, [id, name, email], (err, results) => {

    if(err) {
        console.error('Error inserting data:', err);
      db.end();
        return;
    }

    console.log('Data inserted successfully:');
    res.status(200).send( `Student with name ${name}   sucessfully added` );
});
};




const getAllUsers = (req, res) => {

    const selectQuery = `SELECT * FROM Users`;

    db.execute(selectQuery, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            db.end();
            return;
        }

        else {
            console.log('Data fetched successfully:');

            res.status(200).json(results);
        }
    });
}



module.exports={
    addEntries,
    getAllUsers
};