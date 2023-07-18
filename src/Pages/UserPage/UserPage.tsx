
import { useLocation, useNavigate } from "react-router";
import * as SC from "./UserPageStyled"
import { ReactComponent as LogoSvg } from "assets/icons/logoMobile.svg"
import { useEffect, useState } from "react";
import { useAuth } from "hooks";
import { addAvatar } from "redux/auth/operations";
import { useDispatch } from "react-redux";


interface IProps {
    name: string,
    email: string,
}

const UserPage: React.FC<IProps> = ({ name, email }) => {
    const {user} = useAuth()
    const [avatar, setAvatar] = useState<any>("")
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const attachAvatar = (evt: any) => {
        const file = evt.target.files[0];
        const formData = new FormData();
        formData.append("avatar", file, file.name);

        setAvatar(formData)

    }

    const updateAvatar = (evt: any) => {
       evt.preventDefault()
        dispatch(addAvatar(avatar))
        navigate("/")
   }

    return (<SC.CommonContainer>
        <LogoSvg width={36} />
        <SC.FormStyled onSubmit={updateAvatar}>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <SC.LabelStyled htmlFor="file-input" >
                Choose Your Avatar
            </SC.LabelStyled>
            <SC.InputStyled type="file" id="file-input" name="avatar" onChange={attachAvatar} />
            <SC.SubmitButton>Submit</SC.SubmitButton>
            <SC.SubmitButton>Delete</SC.SubmitButton>
            <SC.BackLink to="/" state={{ from: location }}>Back</SC.BackLink>
        </SC.FormStyled>

    </SC.CommonContainer>);
}

export default UserPage;