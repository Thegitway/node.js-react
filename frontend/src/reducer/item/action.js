export const ADD_ITEM='ADD_ITEM'
export const UPDATE_ITEM='UPDATE_ITEM'
export const DELETE_ITEM='DELETE_ITEM'
export const ITEM_TO_LIST='ITEM_TO_LIST'
export const LOADING_ITEM='LOADING_ITEM'
//actions

export const itemToListAction=(items)=>
{
     return {
  type:ITEM_TO_LIST,
payload:items }
}

export const loadingOneItemAction=(item,loading=true,)=>
{
  item.isLoading=loading
     return {
  type:UPDATE_ITEM,
  payload:item
}
}

export const loadingOneImageAction=(item,items,loading=true,)=>
{
  if(!item.image)
    item.image={}

    item.image.isLoading=loading

     return {
  type:LOADING_ITEM,
  payload:items
}
}

export const loadingItemsAction=(items,loading=true)=>
{
  for(let item of items)
  item.isLoading=loading

     return {
  type:LOADING_ITEM,
  payload:items
}
}

export const loadingImagesAction=(items,loading=true)=>
{
  for(let item of items)
  { if(!item.image)
    item.image={}

    item.image.isLoading=loading}

     return {
  type:LOADING_ITEM,
  payload:items
}
} 


export const addItemAction=(newItem)=>
{
     return {
  type:ADD_ITEM,
  payload:newItem
  }
} 

export const updateItemAction=(item)=>
{
     return {
  type:UPDATE_ITEM,
  payload:item
  }
} 

export const deleteItemAction=(id)=>
{
     return {
  type:DELETE_ITEM,
  payload:id
  }
} 

