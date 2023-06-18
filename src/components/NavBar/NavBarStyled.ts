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