import { BASE_URL } from "../../env.js"
import axios from 'axios'
import { addItemAction, deleteItemAction,
   loadingImagesAction,
    loadingItemsAction,
    loadingOneImageAction,
     loadingOneItemAction,
     updateItemAction } from "./action"
import {loadingAction} from '../page/action.js'


const instance=axios.create({baseURL:BASE_URL})


export const addItem=(newItem)=>{
   return async (dispatch,getState)=>{
      try{
      dispatch(loadingAction())
      const config = {
         onUploadProgress: progressEvent => console.log(progressEvent.loaded)
     }
      const response=await instance.post('items',
      newItem,config)
      const data=response.data.data
      console.log(response)
      if(response.status===201)
      {
         newItem._id=data._id
         newItem.image._id=data.image?._id
      dispatch(addItemAction(newItem))
      }
      else{
         console.log(response.data)
         dispatch({type:'default'})
      }

      dispatch(loadingAction(false))
   }catch(e){
      console.log(e)
   }}
}

export const updateItem=(newItem)=>{
   return async (dispatch,getState)=>{
      try{
      dispatch(loadingAction())

      var image
      if(newItem.imageChanged===false)
      {
         image=newItem.image
         newItem.image=null
      }
      await instance.patch('items',newItem)

      if(newItem.imageChanged===false)
      {
      newItem.image={}
      newItem.image.byte=image.byte
      }

      dispatch(updateItemAction(newItem))

      dispatch(loadingAction(false))

   }catch(e){
      console.log(e)
   
   }}
}

export const getImagesByIds=async (item)=>{

   try{
   //getting images
      if(item.imageId){
      const response = await instance.get(`images/${item.imageId}`)
      const imageData=response.data.data.byte
      if(!item.image)
      item.image={}
      item.image.byte=imageData
     return item
   }
}
catch(e)
{
   console.log(e)
}
return item
}

 export const getItems=()=>
{
   
   return async (dispatch,getState)=>{
try{

   dispatch(loadingAction())

   const res= await instance.get('items')
   var items=res.data.data

   dispatch(loadingAction(false))

   //item without image data
   dispatch(loadingImagesAction([...items]))

   //getting image data
   for(let item of items )
   {
      if(item.imageId){
   item=await getImagesByIds(item)
      }
      //returning the list updated with image
   dispatch(loadingOneImageAction(item,[...items],false))
   }
}
catch(e)
{
   console.log(e)
}}}

export const deleteItem=(id)=>{
   return async (dispatch,getState)=>{
      try{
         dispatch(loadingOneItemAction({_id:id},true))
         await instance.delete(`items/${id}`)

      dispatch(deleteItemAction(id))

   }catch(e){
      console.log(e)
   }}
}


