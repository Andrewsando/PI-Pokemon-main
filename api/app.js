const express =require('express')
const server = express()

server.use(express.json())

server.use((req, res, next)=> {
    res.header('Acces-Control-Allow-Methods', 'GET,POST','OPTIONS');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
     );
    next();
});

server.use('/api/v2', router)

module.exports = server