import itemModel from '../models/Items.js'
import { imageExistByItem } from './imageService.js'

export const findItemsFromImageId=async(imageId)=>
{
  if(imageId)
  return await itemModel.find({imageId:imageId})

  return null
}

export const noImageInItem=(newItem)=>{
     newItem.imageId = null
     newItem.image=null
     return newItem
   }

   export const refactorImageIdFieldInItem=async (newItem)=>{
     //check if the imageId provided exist
   
     if(!await imageExistByItem(newItem))
     {
       newItem= noImageInItem(newItem)
     }
   
     //if image.id exist fill imageId 
     if(newItem.image?._id)
     {
       newItem.imageId=newItem.image?._id
     }
     return newItem
   }

   export const replaceItem=async (newItem)=>{
     var item= new itemModel(newItem)
     await item.save();
   }


   export const itemExist=async (id) =>{
    return await itemModel.findById(id).select('_id')
    }