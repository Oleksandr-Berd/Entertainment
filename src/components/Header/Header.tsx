import * as SC from "./HeaderStyled"

import { ReactComponent as LogoMobileSvg } from "assets/icons/logoMobile.svg"
import AuthNav from "components/AuthNav/AuthNav";

import Navbar from "components/NavBar/NavBar";
import { useAuth } from "hooks";


const Header: React.FC = () => {
    const { isLoggedIn } = useAuth()
    
    console.log(isLoggedIn);
    

    return (<SC.Header>
        <LogoMobileSvg />
        <Navbar />
        {isLoggedIn ? null : <AuthNav />}
    </SC.Header> );
}
 
export default Header;