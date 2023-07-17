import * as Yup from 'yup';

import * as SC from "./LoginFormStyled"
import { useFormik } from 'formik';
import { IFormProps, IFormValues } from 'interfaces/interfaces';
import { ChangeEvent, FormEvent } from 'react';

const InputValidationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 chars length").required("Password is required")
})


const LoginForm: React.FC<IFormProps> = ({submit}) => {
    
    const formik = useFormik<Partial<IFormValues>> ({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: InputValidationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const { email, password } = formik.values
    
    const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        formik.handleChange(evt)
    }

    const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
        evt.preventDefault()


       submit({email, password})
        
    }

    return (<SC.FormContainer>
        <form onSubmit={handleSubmit}>
            <SC.TitleContainer>
                <SC.Title>Login</SC.Title>
            </SC.TitleContainer>
            <SC.InputContainer>
                <SC.StyledInput name="email" type="email" placeholder="Email address" onChange={handleChange}/>
                {formik.errors.email ? <SC.ErrorStyled>{formik.errors.email}</SC.ErrorStyled> : <SC.ErrorStyled style={{ color: "transparent" }}>error</SC.ErrorStyled>}
                <SC.StyledInput name='password' type="password" placeholder="Password" onChange={handleChange } />
                {formik.errors.password ? <SC.ErrorStyled>{formik.errors.password}</SC.ErrorStyled> : <SC.ErrorStyled style={{ color: "transparent" }}>error</SC.ErrorStyled>}
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