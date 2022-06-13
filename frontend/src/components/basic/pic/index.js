import { CircularProgress } from '@mui/material'
import {Image} from './style'
export default function Pic(props) {
  const render=()=>{
    if(props.conditionToRender){
    return <Image
      position={props.position}
      opacity={props.opacity}
      zIndex={props.zIndex}
      height={props.height}
      width={props.width}
      objectFit={props.objectFit}
      src={`data:image/jpeg;base64,${props.image.byte}`}
      ></Image>}
      else if(props.image?.isLoading===true){
       return <CircularProgress />
      }else{
        return <Image
        position={props.position}
        opacity={props.opacity}
        zIndex={props.zIndex}
        height={props.height}
        width={props.width}
        objectFit={props.objectFit}
        src='noImage.png'
        ></Image>
      }
  
   }

  return (
       render()
  )
}
