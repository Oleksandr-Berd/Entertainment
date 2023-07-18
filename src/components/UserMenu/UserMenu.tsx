import { IoMdLogOut } from 'react-icons/io';

import * as SC from "./UserMenuStyled"

import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";
import { NavLink } from 'react-router-dom';

const UserMenu:React.FC = () => {

    const { user } = useAuth()
    const dispatch = useDispatch()

    const {avatarUrl, name} = user


    const handleClick = () => {
dispatch(logout())
    }
    
    return (<SC.CommonContainer>
        <NavLink to="/auth/user">
            <SC.Avatar src={avatarUrl} alt={name} />
        </NavLink>
        
        <SC.ButtonLogout onClick={handleClick}><IoMdLogOut size={24} fill='white'/></SC.ButtonLogout>
    </SC.CommonContainer>
       );
}
 
export default UserMenu;