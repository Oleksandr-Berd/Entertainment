import { ReactNode } from "react";

import * as SC from "./SharedLayoutStyled"

interface IProps {
    children: ReactNode
}

const SharedLayout: React.FC<IProps> = ({ children }) => {
    return (<SC.SharedLayout>{children}</SC.SharedLayout> );
}
 
export default SharedLayout;