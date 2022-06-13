import { Add } from '@mui/icons-material'
import {TopBar,List} from '../index'
import Scaffold from '../basic/Scaffold'

export default  function ListItemComponent(props) {
  
  return (
    <Scaffold isLoading={props.isLoading}>
       <TopBar ButtonClick={()=>props.setStatus('ADD')} ButtonIcon={<Add/>}  ButtonValue="Create"/>
      <List ItemClick={props.ItemClick} data={props.items} DeleteClick={props.DeleteClick}/>
    </Scaffold>
  )
}
