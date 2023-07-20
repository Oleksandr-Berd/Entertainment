import styled from "styled-components"

export const SharedLayout = styled.div`
  min-width: ${(props) => props.theme.width.mobile};

  @media (min-width: 768px) {
    min-width: ${(props) => props.theme.width.tablet};

    padding-top: ${(props) => props.theme.space[6]};
    padding-right: ${(props) => props.theme.space[6]};
    padding-left: ${(props) => props.theme.space[6]};
  }

  @media (min-width: 1440px) {
    min-width: ${(props) => props.theme.width.desktop};

    display: flex;
    flex-direction: row;
  }
`;