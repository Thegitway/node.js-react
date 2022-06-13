import * as React from 'react';
import {Box,Button} from '@mui/material';
import {Style} from '../../index'
import { Container } from './style';


export default function TopBar(props) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container  position="static">
      <Style.Row>
          <Style.NavIcon onClick={props.IconClick} padding={"5px 0px 5px 1vw"} src="akka.png"></Style.NavIcon>
          <Button  onClick={props.ButtonClick} variant="contained" color='success' startIcon={props.ButtonIcon}  >{props.ButtonValue}</Button>
    </Style.Row>
      </Container>
     
    </Box>
  );
}
