import { created, deleted, found, idMissing, notFound, notUUID, success, updated } from '../errors/httpStatus.js';
import itemModel from '../models/Items.js'
import {createImage, deleteImage} from '../repositories/imageRepository.js'
import {  imageExist, isUUID, itemExist,  noImageInItem,  refactorImageIdFieldInItem } from '../services/index.js';


export const createItem= async(body) => {
  
     var image;
     body._id=undefined
     //creating the image
     if(body.image?.byte){
       image= await (await createImage(body.image)).data
     }
     if(image?._id){
     //referencing the image
     body.imageId=image._id
     }

     if(body.imageId)
      if(!isUUID(body.imageId))
       return notUUID('imageId')
  
       if(!await imageExist(body.imageId))
          body=noImageInItem(body)

     //creating the item
     const item=new itemModel(body)
     //commiting
      await  item.save();
      return created(item,'item')
}

export const getItem=async ()=>
{
  var items=[]
   items=await itemModel.find();
     return found(items.map(e=>e),'items',items.length)
}

export const getItemById=async(id)=>
{var item
  if(isUUID(id))
  {
  item= await itemModel.findById(id)
  if(item===null)
  return notFound('item not found')
  else
  return found(item,'item',1)
  }
 else{
 return notUUID()}
}

export const patchItem=async(newItem)=>
{
  if(newItem._id)
  {
    if(isUUID(newItem._id)){

    if(await itemExist(newItem._id)){
     var image;
     //creating the image
     if(newItem.image?.byte){
       image= await (await createImage(newItem.image)).data
     }
     
     if(image?._id){
     //referencing the image
     newItem.imageId=image._id
     }

     await  itemModel.findByIdAndUpdate(newItem._id,await refactorImageIdFieldInItem(newItem)).select('_id')
     return updated(newItem,'item')
    }
    return notFound('item')
    }
  return notUUID()
}
  
    return idMissing()
}



export const deleteItem=async(id)=>
{
  if(id){
    if(isUUID(id)){
     
    if(await itemExist(id)){
    //get the item for the image id
  var item = await itemModel.findById(id)
  //delete image
  if(item?.imageId)
  await deleteImage(item.imageId)
  //delete item
   await itemModel.deleteOne({_id:id})
   return deleted({_id:id},1)
  }
  else
  return notFound('item')
    }
  else
  return notUUID();
    }
    else idMissing()
  
}

