import { Check } from '@mui/icons-material';
import React from 'react'
import {Form,TopBar} from '../index'
import Scaffold from '../basic/Scaffold'
export default function AddItemComponent(props) {

  return (
    <Scaffold isLoading={props.isLoading}>
    <TopBar IconClick={()=>props.setStatus('LISTING')}
     ButtonClick={()=>props.setStatus('LISTING')}
      ButtonIcon={<Check/>}  
      ButtonValue="Back"/>
    <Form title="Create Item"
     ButtonClick={props.ButtonClick}/>
    </Scaffold>
  )
}
