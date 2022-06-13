import {useEffect, useState} from 'react'
import Pic from '../pic';
import { ContainerImage, InputFile } from './style';



export default function ImagePicker(props) {

     const [fileData,setfileData]=useState({byte:props.data})

     const readImage=(e)=>{
      var read=new FileReader();
      read.onload=function(){
         const data=read.result.replace(/data:image\/\w+;base64,/, "")
           setfileData({"byte":data,"name":e.target.files[0].name,});
           props.getPic(data)
         }
      read.readAsDataURL(e.target.files[0])
     }
     
  return (
     <ContainerImage>
     <InputFile required={true} type="file" accept="image/*"
     onChange={(e)=> readImage(e)}></InputFile>
      {
         <Pic 
         conditionToRender={fileData.byte?.length>0}
         position={'absolute'}
         opacity={'60%'}
         zIndex={0}
         height={'60vh'}
         width={'60vh'}
         objectFit={'cover'}
         image={fileData}></Pic>
     }
     </ContainerImage>
  )

  
}
