import * as Yup from "yup"
import { useFormik } from "formik"

import * as SC from "../LoginForm/LoginFormStyled"
import { IFormValues } from "interfaces/interfaces"
import { ChangeEvent } from "react"
import { IFormProps } from '../../interfaces/interfaces';
import { useNavigate } from "react-router"

const InputDataSchema = Yup.object().shape({
    name: Yup.string().min(2, "There is no such short name").required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6, "Password length must be at least six chars").required("Password is required")
})



const RegistrationForm: React.FC<IFormProps> = ({ submit }) => {
    const navigate = useNavigate()

    const formik = useFormik<IFormValues>({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: InputDataSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const { name, email, password } = formik.values

    const handleValueChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        setTimeout(() => { formik.handleChange(evt) }, 300)
    }

    const handleSubmit = (evt: ChangeEvent<HTMLFormElement>): void => {
        evt.preventDefault()

        submit({ name, email, password })
        navigate("/auth/login")
    }

    return (<SC.FormContainer>
        <form onSubmit={handleSubmit}>
            <SC.TitleContainer>
                <SC.Title>Sign Up</SC.Title>
            </SC.TitleContainer>
            <SC.InputContainer>
                <SC.StyledInput name="name" type="text" placeholder="Username" onChange={handleValueChange} />
                {formik.errors.name ? <SC.ErrorStyled>{formik.errors.name}</SC.ErrorStyled> : <SC.ErrorStyled style={{ color: "transparent" }}>error</SC.ErrorStyled>}
                <SC.StyledInput name="email" type="email" placeholder="Email address" onChange={handleValueChange} />
                {formik.errors.email ? <SC.ErrorStyled>{formik.errors.email}</SC.ErrorStyled> : <SC.ErrorStyled style={{ color: "transparent" }}>error</SC.ErrorStyled>}
                <SC.StyledInput name="password" type="password" placeholder="Password" onChange={handleValueChange} />
                {formik.errors.password ? <SC.ErrorStyled>{formik.errors.password}</SC.ErrorStyled> : <SC.ErrorStyled style={{ color: "transparent" }}>error</SC.ErrorStyled>}


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