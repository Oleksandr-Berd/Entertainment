import { ReactComponent as LogoSvg } from "assets/icons/logoMobile.svg"

import * as SC from './AuthPageStyled'
import { useLocation } from "react-router";
import LoginForm from "components/LoginForm/LoginForm";

const AuthPage: React.FC = () => {
const location = useLocation()    

    return (<SC.AuthContainer>

        <LogoSvg width={36} />
        {location.pathname === "/auth/login" ? <LoginForm/> : null}
    </SC.AuthContainer>);
}

export default AuthPage;