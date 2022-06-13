import {HeaderData} from '../../../data/item'
import { v4 as uuid } from 'uuid';
import { Container, MiniText, Row, Text} from '../style';
import Scaffold from '../Scaffold'
import ProgressRow from '../ProgressRow';

export default function List(props) {

  const items = props.data
  return (
    <Scaffold>
    {/* Headers */}
    
    <Row isLoading={false} key={(uuid())}>
    <Container width={'1vw'}></Container>

    <MiniText key={uuid()}>#</MiniText>
    <MiniText key={uuid()}>Status</MiniText>
    {
      HeaderData.map((data)=>{
        return <Text key={uuid()}>{data}</Text>
      })
    }
   <Container width={'6.5vw'}></Container>
    </Row>

    {/* DATA */}
    {getItems(items)}
   
    </Scaffold>
  )

  function getItems(item)
{
  
if(item && item.length && item.length>0)
 return item.map((data,index)=>{
  
      return <ProgressRow DeleteClick={props.DeleteClick} data={{element:data,index:index}} isLoading={data.isLoading} hover ItemClick={()=>props.ItemClick(data)}  key={uuid()}/>
    })
}

}
