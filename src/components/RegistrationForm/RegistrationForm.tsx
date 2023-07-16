
import * as SC from "../LoginForm/LoginFormStyled"

const RegistrationForm:React.FC = () => {
    return (<SC.FormContainer>
        <form>
            <SC.TitleContainer>
                <SC.Title>Sign Up</SC.Title>
            </SC.TitleContainer>
            <SC.InputContainer>
                <SC.StyledInput type="text" placeholder="Username" />
                <SC.StyledInput type="email" placeholder="Email address" />
                <SC.StyledInput type="password" placeholder="Password" />
               

            </SC.InputContainer>
            <SC.StyledButton type="submit">Sign Up</SC.StyledButton>
            <div>
                <SC.Text>Already have an account?</SC.Text>
                <SC.StyledLink to="/auth/login">Login</SC.StyledLink>
            </div>
        </form>
    </SC.FormContainer>);
}

export default RegistrationForm;