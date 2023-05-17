let users = require("../models/users.model");
const {v4: uuidv4} = require('uuid')


const getAllUsers = async (req, res) => {
    try {
       const alluserGet= await users.find()
        res.status(200).json(alluserGet)
    } catch (err) {
        res.status(500).send(err.message ); 
    }
};

const singleUser = async (req, res) => {
    try {
        const singleUser = await users.findOne({
            id: req.params.id
        })
        res.status(200).json(singleUser)
    } catch (err) {
        res.status(500).send(err.message ); 
    }
};

const createUser = async (req, res) => {
    try {
            
        const newUsers = new users({
            id: uuidv4(),
            username: req.body.username,
            email: req.body.email,
            age: Number(req.body.age)
        });
        await newUsers.save(); 
        res.status(200).json(newUsers)
    } catch (err) {
        res.status(500).send(err.message );
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await users.findOne({
            id: req.params.id
        })
        user.username = req.body.username
        user.age = Number(req.body.age)
        user.email = req.body.email

        await user.save(); 
        res.status(200).json(user)
    } catch (err) {
        res.status(500).send(err.message );
    }
};

const deleteUser = async (req, res) => {
    try {
        await users.deleteOne({
            id: req.params.id
        })
        res.status(200).send('user has been deleted')
    } catch (err) {
        res.status(500).send(err.message ); 
    }
};
module.exports = {
    getAllUsers,
    singleUser,
    createUser,
    deleteUser,
    updateUser
}