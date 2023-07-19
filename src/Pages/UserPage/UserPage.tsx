
import { useLocation, useNavigate } from "react-router";
import * as SC from "./UserPageStyled"
import { ReactComponent as LogoSvg } from "assets/icons/logoMobile.svg"
import { useState } from "react";
import { addAvatar } from "redux/auth/operations";
import { useDispatch } from "react-redux";


interface IProps {
    name: string,
    email: string,
}

const UserPage: React.FC<IProps> = ({ name, email }) => {
    const [avatar, setAvatar] = useState < object | null>(null)
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const attachAvatar = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const file = evt.target.files && evt.target.files[0];

        const formData = new FormData();
        if (file) {
            formData.append("avatar", file, file.name);
        }

        setAvatar(formData);
    };

    const updateAvatar = (evt: React.FormEvent) => {
       evt.preventDefault()
        dispatch(addAvatar(avatar))
        navigate("/")
   }

    const avatarButtonText = avatar ? "Avatar is chosen, please submit" : "Choose Your Avatar"
    
    
    return (<SC.CommonContainer>
        <LogoSvg width={36} />
        <SC.FormStyled onSubmit={updateAvatar}>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <SC.LabelStyled htmlFor="file-input" status={avatar ? "chosen" : "empty"}>
                {avatarButtonText}
            </SC.LabelStyled>
            <SC.InputStyled type="file" id="file-input" name="avatar" onChange={attachAvatar} />
            <SC.SubmitButton>Submit</SC.SubmitButton>
            <SC.BackLink to="/" state={{ from: location }}>Back</SC.BackLink>
        </SC.FormStyled>

    </SC.CommonContainer>);
}

export default UserPage;