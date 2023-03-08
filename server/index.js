require('dotenv').config()
const port = 3001
const cors = require('cors');
const express = require('express')
const bodyParser = require('body-parser')
const server = express();

const actions = require('./actions/mainActions')


server.use(bodyParser.json({ limit: '50mb' }))
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit:50000 }))

server.get('/find/:name' , getImages)
server.post('/', postImages)
server.get('/dir', getDir)

function getDir(req, res){
    actions.getImageDir()
        .then(result => res.json(result))
        .catch(err => res.json(err))
}

function getImages(req, res){
    const name = req.params.name
    console.log(name)
    actions.findImage(name)
        .then(result => res.json(result))
        .catch(err => res.json(err))
}

function postImages(req, res){
    console.log('getImages')
    const {name} = req.body
    actions.findImage(name)
        .then(result => res.json(result))
        .catch(err => res.json(err))
}

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
