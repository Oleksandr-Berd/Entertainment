import { useLocation } from "react-router";

import { ReactComponent as LogoSvg } from "assets/icons/logoMobile.svg"

import * as SC from './AuthPageStyled'

import LoginForm from "components/LoginForm/LoginForm";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";
import { IFormValues } from "interfaces/interfaces";

const AuthPage: React.FC = () => {
    const location = useLocation()

    const handleSubmit = (data: IFormValues) => {
        console.log(data);
    }

    return (<SC.AuthContainer>




        <LogoSvg width={36} />
        {location.pathname === "/auth/login" ? <LoginForm /> : <RegistrationForm submit={handleSubmit} />}
    </SC.AuthContainer>);
}

export default AuthPage;