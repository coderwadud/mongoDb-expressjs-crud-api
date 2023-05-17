const mongoose  = require('mongoose')

const userSchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    createdOn:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('AllUser', userSchema)