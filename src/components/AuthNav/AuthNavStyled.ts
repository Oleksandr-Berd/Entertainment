import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const AuthNav = styled.nav`
display: flex;
align-items: center;
`

export const AuthNavItem = styled.li`
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[2]};
  }
`;

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.size.XS};

  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.color.red};
    transition: color 0.3s ease-in-out;
  }
`;