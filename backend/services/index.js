import mongoose from 'mongoose'
export *  from './itemService.js'
export * from './imageService.js'


export const isUUID=(s)=>
{
  return mongoose.Types.ObjectId.isValid(s)
}




