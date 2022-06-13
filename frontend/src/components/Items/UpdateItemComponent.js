import { Check } from '@mui/icons-material';
import React from 'react'
import {Form,TopBar} from '../index'
import Scaffold from '../basic/Scaffold'

export default function UpdateItemComponent(props) {
  return (
    <Scaffold isLoading={props.isLoading}>
    <TopBar IconClick={()=>props.setStatus('LISTING')}
     ButtonClick={()=>props.setStatus('LISTING')}
      ButtonIcon={<Check/>}  
      ButtonValue="Back"/>

    <Form title="Update Item"
    CurrentItem={props.CurrentItem}
     ButtonClick={props.ButtonClick}/>
    </Scaffold>
  )
}
