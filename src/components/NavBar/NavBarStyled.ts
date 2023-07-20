import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const NavBar = styled.nav`
display: flex;
align-items: center;

@media (min-width: 1440px){
  flex-direction: column;
  align-items: center;
}
`

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[6]};

    @media (min-width: 1440px) {
      margin-right: 0;
      margin-bottom: 40px;

      &:hover, &:focus{
        color: ${props => props.theme.color.red};
      }
    }
  }
`;

export const Link = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;

  & > * {
    transition: fill 0.3s ease-in-out;
  }

 @media (min-width: 1440px){
  &:hover > * {
    fill: ${props => props.theme.color.red}
  }
 }
`;

export const Image = styled.img`
  
`;