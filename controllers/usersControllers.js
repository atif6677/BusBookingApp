const {Users} = require('../models/allModel'); 
const {Op} = require('sequelize');

const addEntries = async(req, res) => {
   try {
    const { id, name, email } = req.body;
    
    const userId = await Users.create({
        id : id,
        name : name,
        email: email
    });
    
    return res.status(201).json({ message: 'User added successfully', userId });
    
   } catch (error) {
       console.error('Error inserting data:', error);
       return res.status(500).send('Failed to insert user');    
    
   }  }


const getAllUsers = async(req, res) => {
    try {
    
        const users = await Users.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        console.error('Error fetching data:', error);
        return res.status(500).send('Failed to fetch users');
    }
}



module.exports={
    addEntries,
    getAllUsers
};