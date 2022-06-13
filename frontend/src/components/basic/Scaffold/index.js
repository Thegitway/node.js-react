import { CircularProgress } from "@mui/material"
import { Center } from "../style"



export default function Scaffold(props) {


     function render(props){
          if(props.isLoading===true)
          {
              return <Center><CircularProgress/></Center>
          }else
          return <div>{props.children}</div>
     }
  return render(props)
}
