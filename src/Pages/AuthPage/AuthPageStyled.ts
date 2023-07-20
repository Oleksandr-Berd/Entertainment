import styled from "styled-components";

export const AuthContainer = styled.div`
  padding-top: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-bottom: 170px;

  text-align: center;

  @media (min-width: 768px) {
    padding-top: 88px;
    padding-left: 184px;
    padding-right: 184px;
    padding-bottom: 420px;
  }
`;
