import * as SC from "./AuthNavStyled"

const AuthNav: React.FC = () => {
    return (<SC.AuthNav>
        <SC.AuthNavItem>
            <SC.AuthNavLink to="/auth/login">Login</SC.AuthNavLink>
        </SC.AuthNavItem>
        <SC.AuthNavItem>
            <SC.AuthNavLink to="/auth/registration">Sign Up</SC.AuthNavLink>
            </SC.AuthNavItem>
    </SC.AuthNav>);
}

export default AuthNav;

