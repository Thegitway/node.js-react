import imageModel from '../models/Images.js'
import itemModel from '../models/Items.js'
import { findItemsFromImageId, imageExist, isUUID, noImageInItem } from '../services/index.js';
import { created, deleted, found, idMissing, notFound, notUUID, updated } from '../errors/httpStatus.js';

export const createImage= async(body) => {
          body._id=undefined
          const image=new imageModel(body)
          await  image.save();

         return created(image,'image')
        
}

export const getImage=async ()=>
{
  var images=[]
   images=await imageModel.find()
     return found(images.map(e=>e),'images',images.length)
}

export const getImageById=async(id)=>{
  var image
  if(isUUID(id))
  {
    image = await imageModel.findById(id)
  if(image===null)
  return notFound('image not found')
  else
  return found(image,'image',1)
  }
 else{
   
 return notUUID()}
}

export const patchImage=async(newImage)=>
{
  if(newImage._id)
  {
    if(isUUID(newImage._id))
{
  if(await imageExist(newImage._id))
  {
  await imageModel.findByIdAndUpdate({_id:newImage._id},newImage).select('_id')
    return updated(newImage,'image')
  }
  else return notFound('image')
}else 
return notUUID()
  }
  return idMissing()  
}


export const deleteImage=async(id)=>
{
  if(id){
  if(isUUID(id)){
   
  if(await imageExist(id)){
  //find items related to the image
 const items = await findItemsFromImageId(id)
 var itemsId=[];
 if(items?.length>0)
  {  //patch the item
    for(let i of items) {
   itemsId.push(await  itemModel.findByIdAndUpdate(i._id,noImageInItem(i)).select('_id'))
}
}

  //delete image
  await imageModel.deleteOne({_id:id})
  return deleted({_id:id,itemsRef:itemsId},1)
}
else
return notFound('image')
  }
else
return notUUID();
  }
  else idMissing()
}