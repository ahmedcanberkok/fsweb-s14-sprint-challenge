// serverı buraya yazın ve index.js require yazın

//Importlar
const express=require('express');
const server = express();
const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')
const taskRouter = require('./task/router')


//Middlewares
server.use(express.json());


//Routers
server.use('/api',resourceRouter)
server.use('/api',projectRouter)
server.use('/api',taskRouter)

//Errors
server.use((err, req, res, next) => {
  res.status((err.status || 500)).json({
    customMessage:"Global error handler üzerinde hata oluştu",
    message:err.message
  })
})
//Exports

module.exports = server;