import * as SC from "./HeaderStyled"

import { ReactComponent as LogoMobileSvg } from "assets/icons/logoMobile.svg"
import AuthNav from "components/AuthNav/AuthNav";

import Navbar from "components/NavBar/NavBar";
import UserMenu from "components/UserMenu/UserMenu";
import { useAuth } from "hooks";


const Header: React.FC = () => {
    const { isLoggedIn, isRefreshing } = useAuth()
        

    return (<SC.Header>
        <LogoMobileSvg />
        <Navbar />

        {isLoggedIn? <UserMenu /> : !isRefreshing ? <AuthNav/> : <div style={{minWidth: "64px"}}></div>}

    </SC.Header> );
}
 
export default Header;