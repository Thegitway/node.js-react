import { LinearProgress } from '@mui/material'
import { RowTable } from './style'
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import Pic from '../pic';
import { v4 as uuid } from 'uuid';
import { Center, Container, MiniText, Text, TextIngrediant } from '../style';

export default function ProgressRow(props) {

  const render=()=>{
    if(!props.isLoading){
    return <RowTable
      hover={props.hover}
      onClick={props.ItemClick}>
      <MiniText key={uuid()}>
      {props.data?.index+1}</MiniText>
      {getItemInfo(props.data?.element??{})}
      </RowTable>
       }
       return (
       <LinearProgress />)
   }


   //rows
function getItemInfo(data){
  return [
    // status
  <MiniText key={uuid()}>{data.stock>0?'true':'false'}</MiniText>,
  
  // pic
  <Container key={uuid()}>
  {
   <Pic isLoading={data.image?.isLoading} image={data.image} conditionToRender={(data.image && data.image.byte)} width={'7vw'} key={uuid()} />
  }
  </Container>,
  // Name
  <Text key={uuid()}>{data['name']}</Text>,
  
  // Ingrediant
  <TextIngrediant key={uuid()}>
  {
    data.ingrediant?data.ingrediant?.map((ingr,index)=>
  {
    return data['ingrediant'].length===index+1 ? <span key={uuid()}>{ingr}</span >:<span key={uuid()}>{ingr}, </span>
  }):''}</TextIngrediant>,
  
  // stock
  <Text key={uuid()}>{data.stock}</Text>,
  
  // price
  <Text key={uuid()}>{data.price}</Text>,
  
  //delete
  <IconButton key={uuid()}
   onClick={(e)=>
  {
   props.DeleteClick(e,data._id)
    }
    }
     aria-label="delete">
    <Delete key={uuid()} color='error'/>
  </IconButton>]
  }

  return render()

}
