import styled from "styled-components"

export const CommonContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin-bottom: 26px;
`

export const SearchInput = styled.input`
margin-left: ${props => props.theme.space[4]};

font-size: ${props => props.theme.size.N};
color: ${props => props.theme.color.white};
background-color: transparent;
font-weight: ${props => props.theme.normal};

border: none;
`