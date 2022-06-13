import styled from 'styled-components'
import * as _ from '../style'

export const RowTable=styled(_.Row)`

  border:0px;
  border-bottom:1px;
  padding: 20px;
  padding-bottom:10px;
  border-color:grey;
  border-style:solid ;
  justify-content:space-around ;

  &:hover {
    background-color: ${props=>props.hover===true? '#FFE596': 'transparent'};
}
`
