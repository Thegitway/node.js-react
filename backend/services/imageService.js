import imageModel from '../models/Images.js'

export const imageExistByItem=async (itemBody)=>
{
  var exist=null;
  if(itemBody.imageId)
  exist=await imageModel.findById(itemBody.imageId).select('_id');
  else if(itemBody.image?._id)
  exist=await imageModel.findById(itemBody.image._id).select('_id');

  return (exist!==null)
}

export const imageExist=async (id)=>
{
 return await imageModel.findById(id).select('_id')
}