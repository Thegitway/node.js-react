import styled from 'styled-components';


export const Nav = styled.nav` 
font-size: 18px;
top: 0;
z-index: 999;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`;

export const Row=styled.div`
display:flex;
justify-content: space-between;
align-items:center;

`

export const Text=styled.div`
font-size: 1.5em;
  text-align: center;
  color: teal;
  width: 13vw ;
  
`

export const TextIngrediant=styled(Text)`
flex-wrap:wrap;
`

export const MiniText=styled(Text)`
width: 7vw ;
`

export const Center=styled.div`
height: ${props=>props.height??'100vh'};
width: ${props=>props.width??'100vw'};
justify-content: center;
display:flex;
align-items: center;
`

export const Container=styled.div`
width:${props=>props.width?? '13vw'};
justify-content: center;
display:flex
`



export const NavIcon = styled.img`
margin-right: .8rem;
transition: all .5s ease;
height: 6vh;
margin : ${props=>props.maring};
padding: ${props=>props.padding};
&:hover {
    transform: scale(1.1) ;
    cursor:pointer;
}
`;




export const MenuIcon = styled.div`
display: none;

@media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
}
`;

export const Button = styled.button`
  background: ${props => props.background ?? '#32A8B4'};
  color: ${props => props.color ?? 'white'};
  font-size: 1em;
  margin: 0.5vw;
  padding: 0.25em 1em;
  border:none;
  border-radius: 5px;
  &:hover{
    cursor:pointer
  }
`;

export const Menu = styled.ul`
display: flex;
align-items: center;
text-align: center;

@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? '0' : '-100%'};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all .5s ease;
}
`;

export const MenuItem = styled.li`
list-style: none;
height: 80px;


@media only screen and (max-width:1000px){
    width: 100%;
    &:hover {
        border: none;
    }
}
`;


export const MenuItemBtn = styled.li`
list-style: none;
@media screen and (max-width:1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
}
`;
