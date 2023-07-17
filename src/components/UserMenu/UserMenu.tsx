import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";

const UserMenu:React.FC = () => {

    const { user } = useAuth()
    const dispatch = useDispatch()

    const {avatarUrl, name} = user


    const handleClick = () => {
dispatch(logout())
    }
    
    return (<><div>
        <h4>Welcome {name}</h4>
        <img src={avatarUrl} alt="" />
    </div>
        <button onClick={handleClick}>Logout</button>
    </>);
}
 
export default UserMenu;