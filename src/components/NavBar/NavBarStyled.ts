import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const NavBar = styled.nav`
display: flex;
align-items: center;
`

export const Item = styled.li`
&:not(:last-child){
    margin-right: ${props => props.theme.space[6]};

}
`

export const Link = styled(NavLink)`
  & > * {
    transition: fill 0.3s ease-in-out;
  }

  &:hover > *
  {
    fill: ${(props) => props.theme.color.red};
    transition: fill 0.3s ease-in-out;
  }
`;

export const Image = styled.img`
  
`;