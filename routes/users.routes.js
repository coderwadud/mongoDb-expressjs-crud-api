const express = require('express');
const {getAllUsers, createUser, singleUser, deleteUser, updateUser} = require('../controllers/user.controller');
const router = express.Router();

router.get('/users', getAllUsers)
router.get('/users/:id', singleUser)
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)

module.exports = router;