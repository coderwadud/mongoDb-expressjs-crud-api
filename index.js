const app = require('./app');
const config = require('./config/config');
const PORT = config.app.port
const hostName = config.hostName.hosturl

app.listen(PORT, ()=>{
    console.log(`Your Server Is Running ${hostName}${PORT}`);
});