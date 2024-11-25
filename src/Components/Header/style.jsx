import styled from "styled-components";
import {Link} from "react-router-dom";


export const HeaderStyle = styled.header` 
display: flex;
justify-content: space-between;
align-items: center;


`
export const StyleLink = styled(Link) `
text-decoration: none;
color: darkgreen;
&:hover{
    color: red
}

`
/* lembrar de importar ele no ./style e alterar o nome maiúsculo que colquei aq abaixo */
export const Ul = styled.ul `
list-style: none;
display: flex;
width: 40vw;
justify-content: space-around;
`
