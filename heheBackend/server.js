const socket = require('socket.io')
const express = require('express')
const cors = require('cors')

const app = express();
const io = socket(server)

const server = app.listen(4000, () => {
    console.log('Server running!')
});

io.on('connection',(socket)=>{
    console.log('connect')
    
})
