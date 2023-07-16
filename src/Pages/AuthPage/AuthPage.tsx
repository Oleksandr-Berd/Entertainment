import { ReactComponent as LogoSvg } from "assets/icons/logoMobile.svg"

import * as SC from './AuthPageStyled'
import { useLocation } from "react-router";
import LoginForm from "components/LoginForm/LoginForm";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";

const AuthPage: React.FC = () => {
const location = useLocation()    


    
    return (<SC.AuthContainer>

        <LogoSvg width={36} />
        {location.pathname === "/auth/login" ? <LoginForm/> : <RegistrationForm />}
    </SC.AuthContainer>);
}

export default AuthPage;