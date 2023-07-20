import styled from "styled-components"

export const CommonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 1440px){
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  width: ${(props) => props.theme.space[6]};
  height: ${(props) => props.theme.space[6]};

  border-radius: ${(props) => props.theme.radius[5]};

  @media (min-width: 1440px) {
    width: 42px;
    height: 42px;
  }
`;

export const ButtonLogout = styled.button`
display: flex;
align-items: center;
justify-content: center;

margin-left: ${props => props.theme.space[3]};

background-color: transparent;

border: none;
border-radius: ${props => props.theme.radius[5]};

@media (min-width: 1440px){
    margin-left: 0;

    margin-top: ${props => props.theme.space[10]};
}
`
export const Greeting = styled.p`
margin-right: ${props => props.theme.space[4]};
`