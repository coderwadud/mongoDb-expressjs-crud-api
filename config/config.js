require ("dotenv").config();

const dev ={
    app:{
        port: process.env.PORT || 4000
    },
    db:{
        url: process.env.MONGO_URI || 'mongodb://localhost:27017/userDemoDb',
    },
    hostName: {
        hosturl: process.env.HOST_NAME || 'http://localhost:'
    }
}

module.exports = dev;