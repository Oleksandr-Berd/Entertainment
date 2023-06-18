import * as SC from "./HeaderStyled"

import { ReactComponent as LogoMobileSvg } from "assets/icons/logoMobile.svg"
import AuthNav from "components/AuthNav/AuthNav";

import Navbar from "components/NavBar/NavBar";


const Header: React.FC = () => {
    return (<SC.Header>
        <LogoMobileSvg />
        <Navbar />
        <AuthNav/>
    </SC.Header> );
}
 
export default Header;