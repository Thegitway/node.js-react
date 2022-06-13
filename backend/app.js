import  bodyParser from 'body-parser'
import itemController from './controllers/itemController.js'
import imageController from './controllers/imageController.js'
import cors from 'cors'
import express from 'express'
import './db/index.js'
import morgan from 'morgan'
import fs from 'fs'
import {initKeycloak} from './keycloak-config.js' ;


const app=express()


app.use(bodyParser.urlencoded({extended:false, limit: '5mb'}))
app.use(bodyParser.json({ limit: '5mb'}))
app.use(cors())

var accessLogStream = fs.createWriteStream(`./access.log`, { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

const keycloak=initKeycloak()
app.use(keycloak.middleware());
app.use('/images',imageController)
app.use('/items',itemController)

export default app