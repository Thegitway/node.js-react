import { TextField } from '@mui/material'
import styled from 'styled-components'

export const MarginContainer=styled.div`
  margin : 3vh 5vw 0px 5vw;
  display: flex ;
flex-direction:column;
align-items:center;`

export const TextFieldForm=styled(TextField)(({ theme }) => ({
  width: '22vw',
}));