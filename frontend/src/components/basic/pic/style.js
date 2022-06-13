import styled from "styled-components";

export const Image=styled.img`
position:${props=>props.position};
opacity:${props=>props.opacity};
z-index:${props=>props.zIndex};
height:${props=>props.height};
width:${props=>props.width};
object-fit:${props=>props.objectFit};
`