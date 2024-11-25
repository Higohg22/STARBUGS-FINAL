import {Link} from "react-router-dom"
import logo from "../../assets/images/logo 2.png"


import { HeaderStyle, StyleLink, Ul  } from "./style"
export default function Header (){
    return(
        <HeaderStyle>
            <img src={logo} alt="logomarca" />
            {/* <img src="src/assets/images/logo 2.png" alt="logomarca" /> */}
            <nav>
                <Ul>
                    <li>
                        <StyleLink to="/"> Home</StyleLink>
                    </li>
                    <li>
                        <StyleLink to="/novidades" > Novidades</StyleLink>
                    </li>
                    <li>
                    <StyleLink to="/sobre" >Sobre </StyleLink> 
                    </li>
                </Ul>
            </nav>
        </HeaderStyle>
    )
}