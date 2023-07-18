
import { useLocation } from "react-router";
import * as SC from "./UserPageStyled"
import { ReactComponent as LogoSvg } from "assets/icons/logoMobile.svg"
import { ChangeEvent, useEffect, useState } from "react";


interface IProps {
    name: string,
    email: string,
    submit: (avatar:any) => void
}

const UserPage: React.FC<IProps> = ({ name, email, submit }) => {
    const [avatar, setAvatar] = useState<any>("")

    const location = useLocation()

    const attachAvatar = (evt: any) => {
        const file = evt.target.files[0]; 
        const formData = new FormData();
        formData.append("avatar", file, file.name); 

        setAvatar(formData)
        
}

    useEffect(() => {
        
        submit(avatar)
    }, [avatar, submit])
  
    return (<SC.CommonContainer>
        <LogoSvg width={36} />
        <SC.FormStyled >
            <h1>{name}</h1>
            <h2>{email}</h2>
            <SC.LabelStyled htmlFor="file-input" >
                Choose Your Avatar
            </SC.LabelStyled>
            <SC.InputStyled type="file" id="file-input" name="avatar" onChange={attachAvatar}/>
            <SC.SubmitButton>Submit</SC.SubmitButton>
            <SC.SubmitButton>Delete</SC.SubmitButton>
            <SC.BackLink to="/" state={{ from: location }}>Back</SC.BackLink>
        </SC.FormStyled>
       
    </SC.CommonContainer> );
}
 
export default UserPage;