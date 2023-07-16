
import * as SC from "./LoginFormStyled"

const LoginForm:React.FC = () => {
    return (<SC.FormContainer>
        <form>
            <SC.TitleContainer>
                <SC.Title>Login</SC.Title>
            </SC.TitleContainer>
            <SC.InputContainer>
                <SC.StyledInput type="email" placeholder="Email address"/>
                <SC.StyledInput type="password" placeholder="Password"/>
            </SC.InputContainer>
            <SC.StyledButton type="submit">Login to your account</SC.StyledButton>
            <div>
                <SC.Text>Don't have an account?</SC.Text>
                <SC.StyledLink to="/auth/registration">Sign Up</SC.StyledLink>
            </div>
        </form>
    </SC.FormContainer>);
}

export default LoginForm;