import { IoMdLogOut } from 'react-icons/io';

import * as SC from "./UserMenuStyled"

import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

const UserMenu:React.FC = () => {
    const { user } = useAuth()
    const dispatch = useDispatch()
    const { avatarUrl, name } = user
    
    const isMobile = useMediaQuery("(max-width:767px)")
    const isDesktop = useMediaQuery("(min-width:1440px)")


    const handleClick = () => {
dispatch(logout())
    }
    
    return (<SC.CommonContainer>
        {!isMobile ? null : isDesktop ? null : <SC.Greeting>Welcome {name} </SC.Greeting>}
        <NavLink to="/auth/user">
            
            <SC.Avatar src={avatarUrl} alt={name} />
        </NavLink>
        
        <SC.ButtonLogout onClick={handleClick}><IoMdLogOut size={isDesktop ? 42 : 24} fill='white'/></SC.ButtonLogout>
    </SC.CommonContainer>
       );
}
 
export default UserMenu;