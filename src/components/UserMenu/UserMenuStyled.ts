import styled from "styled-components"

export const CommonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Greeting = styled.h4`
font-size: ${props => props.theme.size.N};
`

export const Avatar = styled.img`
  width: ${(props) => props.theme.space[6]};
  height: ${(props) => props.theme.space[6]};

  border-radius: ${(props) => props.theme.radius[5]};
`;

export const ButtonLogout = styled.button`
display: flex;
align-items: center;
justify-content: center;

margin-left: ${props => props.theme.space[3]};

background-color: transparent;

border: none;
border-radius: ${props => props.theme.radius[5]};
`