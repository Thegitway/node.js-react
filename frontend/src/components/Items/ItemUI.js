import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux';
import { addItem, deleteItem, getItems, updateItem } from "../../reducer/item/itemService";
import {UpdateItemComponent,
        AddItemComponent,
        ListItemComponent} from "../index";
export default function ItemUI() {

     
     const [status,setStatus]=useState('LISTING')
     const [currentItem,setCurrentItem]=useState({})
     const dispatch=useDispatch()
     const s=useSelector(state=>state)
     const items=s.item
     const page=s.page

     
     useEffect(()=>{
    dispatch(getItems())
     },[])
   

     
     //communication avec redux
     const ConfirmAdd =  (currentItem)=>{
        dispatch(addItem(currentItem))
        setStatus('LISTING')
     }

     const ConfirmUpdate =  (currentItem)=>{
      dispatch(updateItem(currentItem))
      setStatus('LISTING')
   }

     const GoToUpdatePage=(currentItem)=>{
         setCurrentItem(currentItem)
        setStatus('UPDATE')
     }

     const ConfirmDelete=(e,id)=>{
      e.stopPropagation();
      dispatch(deleteItem(id))
     }
   

     return( 
         status ==='UPDATE' ?
     <UpdateItemComponent 
     isLoading={page.isLoading}
      CurrentItem={currentItem}
     setStatus={e=>setStatus(e)}
     ButtonClick={ConfirmUpdate} />
     :
      status=== 'ADD'?
      <AddItemComponent isLoading={page.isLoading}
                         ButtonClick={ConfirmAdd}
                         setStatus={e=>setStatus(e)}/>
     :
     <ListItemComponent 
     isLoading={page.isLoading}
      setStatus={e=>setStatus(e)}
     ItemClick={GoToUpdatePage}
     DeleteClick={ConfirmDelete}
     items={items}
     />
)  
   }