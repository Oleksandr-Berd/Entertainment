import * as SC from "./AuthNavStyled"

const AuthNav: React.FC = () => {
    return (<SC.AuthNav>
        <SC.AuthNavItem>
            <SC.AuthNavLink to="login">Login</SC.AuthNavLink>
        </SC.AuthNavItem>
        <SC.AuthNavItem>
            <SC.AuthNavLink to="registration">Registration</SC.AuthNavLink>
            </SC.AuthNavItem>
    </SC.AuthNav>);
}

export default AuthNav;

