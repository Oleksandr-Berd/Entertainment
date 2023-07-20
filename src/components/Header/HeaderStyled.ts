import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: ${(props) => props.theme.space[5]};
  padding-bottom: ${(props) => props.theme.space[5]};
  padding-left: ${(props) => props.theme.space[4]};
  padding-right: ${(props) => props.theme.space[4]};

  background-color: ${(props) => props.theme.color.semiDark};

  @media (min-width: 768px) {
    padding-top: ${(props) => props.theme.space[6]};
    padding-bottom: ${(props) => props.theme.space[6]};
    padding-left: ${(props) => props.theme.space[6]};
    padding-right: ${(props) => props.theme.space[6]};

    border-radius: ${(props) => props.theme.radius[2]};
  }

  @media (min-width: 1440px) {
    width: 96px;
    height: 960px;

    flex-direction: column;

    padding-top: 35px;
    padding-bottom: ${(props) => props.theme.space[8]};
    padding-left: 28px;
    padding-right: 28px;
  }
`;



  
