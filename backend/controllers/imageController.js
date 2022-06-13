import express from 'express'
import { badRequest, created, found, idMissing, updated } from '../errors/httpStatus.js'
import {createImage, deleteImage, getImage, getImageById, patchImage} from '../repositories/imageRepository.js'

const imageController = express.Router()

imageController.route('/')
.get(async (req,res)=>{
    try{
        const info= await getImage()
        await res.status(info.status).send(info)
 }catch(e)
 {
      res.status(400).send({error:`${e}`})
 }
})
.post(async (req,res)=>{
    try{
    const info=await createImage(req.body)
    await res.status(info.status).send(info)
    }catch(e)
    {
     res.status(400).send({error:`${e}`})
    }
}).patch(async (req,res)=>{
    try{
       const info= await patchImage(req.body)

        await res.status(info.status).send(info)

        }catch(e)
        {
         res.status(400).send({error:`${e}`})
        }
    
}).delete(async(req,res)=>{
    const info=idMissing()
          res.status(info.status).send(info)
})

imageController.route('/:id')
.get(async (req,res)=>{
    try{
        const info=await getImageById(req.params.id)
         await res.status(info.status).send(info)
         
     
    }
    catch(e)
    {
        res.status(400).send({error:`${e}`})
    }
}).delete(async (req,res)=>{
    try{
       const info= await deleteImage(req.params.id)
        await res.status(info.status).send(info)
         }
         catch(e)
         {
              res.status(400).send({error:`${e}`})
         }
}).post(async(req,res)=>{
    const info=badRequest
     res.status(info.status).send(info)
}).patch(async(req,res)=>{
    const info=badRequest
     res.status(info.status).send(info)
})


export default imageController