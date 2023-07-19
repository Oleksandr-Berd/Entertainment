import { useLocation } from "react-router";

import { ReactComponent as LogoSvg } from "assets/icons/logoMobile.svg"

import * as SC from './AuthPageStyled'

import LoginForm from "components/LoginForm/LoginForm";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";
import { IFormValues } from "interfaces/interfaces";
import { useDispatch } from "react-redux";
import { login, register } from "redux/auth/operations";
import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit';


const AuthPage: React.FC = () => {
    const location = useLocation()
    const dispatch = useDispatch<Dispatch>()



    const handleSubmit = (data: IFormValues) => {

        if (data.name) {
            (dispatch as ThunkDispatch<any, any, AnyAction>)(register(data));
        } else {
            (dispatch as ThunkDispatch<any, any, AnyAction>)(login({ email: data.email, password: data.password }))
        }
    }
    return (<SC.AuthContainer>
        <LogoSvg width={36} />
        {location.pathname === "/auth/login" ? <LoginForm submit={handleSubmit} /> : <RegistrationForm submit={handleSubmit} />}
    </SC.AuthContainer>);
}

export default AuthPage;