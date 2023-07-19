import { useMediaQuery } from 'usehooks-ts'

import * as SC from "./HeaderStyled"

import { ReactComponent as LogoMobileSvg } from "assets/icons/logoMobile.svg"
import AuthNav from "components/AuthNav/AuthNav";

import Navbar from "components/NavBar/NavBar";
import UserMenu from "components/UserMenu/UserMenu";
import { useAuth } from "hooks";


const Header: React.FC = () => {
    const { isLoggedIn, isRefreshing } = useAuth()
    const isTablet = useMediaQuery("(min-width:768px)")
        

    return (<SC.Header>
        <LogoMobileSvg width={isTablet ? "32px" : "25px"} />
        <Navbar />

        {isLoggedIn? <UserMenu /> : !isRefreshing ? <AuthNav/> : <div style={{minWidth: "64px"}}></div>}

    </SC.Header> );
}
 
export default Header;