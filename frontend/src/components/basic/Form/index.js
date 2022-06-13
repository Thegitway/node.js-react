import {  Button, MenuItem } from '@mui/material'
import {useState,useEffect} from 'react'
import ImagePicker from '../ImagePicker'
import {Row} from '../style'
import { v4 as uuid } from 'uuid';
import { MarginContainer,TextFieldForm } from './style';
import {ingrediants}from '../../../data/item'
import Scaffold from '../Scaffold'

export default function Form(props) {


 const [textName,setTextName]=useState(props.CurrentItem?.name ?? '')
 const [nameValid,setNameValid]=useState(textName?.length>0 ?? false)

 const [textStock,setTextStock]=useState(props.CurrentItem?.stock ?? '')
 const [stockValid,setStockValid]=useState(textStock?.toString().length>0 ?? false)

 const [textPrice,setTextPrice]=useState(props.CurrentItem?.price ?? '')
 const [priceValid,setPriceValid]=useState(textPrice?.toString().length>0 ?? false)

 const [ing,setIng]=useState(props.CurrentItem?.ingrediant ?? [])

 const [imageData,setImageData]=useState(props.CurrentItem?.image?.byte)
 
 const [imageChanged,setImageChanged]=useState(false)

function checkValid()
{
  return (nameValid && priceValid && stockValid)
}


 function onChangeValue(value,setValidator,setValue)
  {
    setValue(value)
    //validation length > 0
    setValidator(value.length>0)
  }

  

  function ingrediantChange(value){
  setIng(value)
  }
  
  function getPic(data)
  {
    setImageChanged(true)
  setImageData(data)
  }

   function submit(e) {

    e.preventDefault()

     if(checkValid()===true){
       
     var item= {
    "imageChanged":imageChanged,
     "_id":props.CurrentItem?._id,
     "imageId":props.CurrentItem?.imageId,
     "image":{byte:
      (imageData?.length===0)?null:imageData},
     "name":textName,
     "ingrediant":ing,
     "stock":(parseInt(textStock)<0?0:textStock),
     "price":textPrice
   }
     props.ButtonClick(item)
  }

  }

  return (
    <Scaffold>
       <MarginContainer>
       <h1>{props.title}</h1>
       </MarginContainer>

       <Row> 
       <MarginContainer/>

       <ImagePicker data={imageData} getPic={getPic}/>
       <Scaffold>
       <form onSubmit={ (e)=>submit(e)}>
       {/* name */}
       <MarginContainer>
       <TextFieldForm defaultValue={textName} id={uuid()} label="*Name (required)" variant="filled"
       error={!nameValid} onChange={e=>onChangeValue(e.target.value,setNameValid,setTextName)} />
        </MarginContainer>

        {/* ingrediant */}
        <MarginContainer>
        <TextFieldForm
        id={uuid()}
          variant="filled"
          select
          label="Ingrediant"
          value={ing}
          onChange={e=>ingrediantChange(e.target.value)}

          SelectProps={{
      multiple: true,
    }}
        >
          {
            ingrediants.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextFieldForm>
        </MarginContainer>

        {/* stock */}
       <MarginContainer>
       <TextFieldForm id={uuid()} defaultValue={textStock} type="number" label="*Stock (required)" variant="filled"
       error={!stockValid} onChange={e=>onChangeValue(e.target.value,setStockValid,setTextStock)} />
       </MarginContainer>

        {/* price */}
       <MarginContainer>
       <TextFieldForm id={uuid()} defaultValue={textPrice} label="*Price (required)" variant="filled" type='number'
       error={!priceValid} onChange={e=>onChangeValue(e.target.value,setPriceValid,setTextPrice)} />
       </MarginContainer>
       <MarginContainer>
       <Button variant='contained' type="submit" color='success'>Confirme</Button>

       </MarginContainer>
       
       </form>
       </Scaffold>

       <MarginContainer/>
    </Row>
    </Scaffold> 
  )
}
