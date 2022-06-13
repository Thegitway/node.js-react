import express from 'express'
import { badRequest, idMissing} from '../errors/httpStatus.js'
import {createItem,deleteItem,getItem,getItemById, patchItem} from '../repositories/itemRepository.js'
import {getKeycloak,initKeycloak} from '../keycloak-config.js';
const itemController = express.Router()

const keycloak=initKeycloak()

itemController.route('/')
.get(keycloak.protect('user'),async (req,res)=>{
     try{
          const info= await getItem()
          await res.status(info.status).send(info)

   }catch(e)
   {
        res.status(400).send({error:`${e}`})
   }
})
.post(async (req,res)=>{
     try{
            const info=await createItem(req.body)
            await res.status(info.status).send(info)
     }catch(e)
     {
          res.status(400).send({error:`${e}`})
     }
  
}).patch(async(req,res)=>{
     try {
          const info=await patchItem(req.body)
          await res.status(info.status).send(info)
     }
     catch(e)
     {
          res.status(400).send({error:`${e}`})
     }
}).delete(async(req,res)=>{
    const info=idMissing()
          res.status(info.status).send(info)
})


itemController.route('/:id')
.get(keycloak.protect('admin'),async (req,res)=>{
     try{
         const info=await getItemById(req.params.id)
         await res.status(info.status).send(info)
     }
     catch(e)
     {
          res.status(400).send({error:`${e}`})
     }
}).delete(async(req,res)=>{
     try{
    var info=await deleteItem(req.params.id)
    await res.status(info.status).send(info)
     }
     catch(e)
     {
          res.status(400).send({error:`${e}`})
     }
}).post(async(req,res)=>{
    const info=badRequest
     res.status(info.status).send(info)
})
.patch(async(req,res)=>{
     const info=badRequest
      res.status(info.status).send(info)
 })


export default itemController