import styled from "styled-components"

export const CommonContainer = styled.div`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: 61px;
  padding-right: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};

  @media (min-width: 768px) {
    padding-top: 33px;
    padding-bottom: 56px;
    padding-right: ${(props) => props.theme.space[6]};
    padding-left: ${(props) => props.theme.space[6]};
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.size.XN};
  font-weight: ${(props) => props.theme.weight.light};
  line-height: 1;
  letter-spacing: -0.31px;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.size.M};
    font-weight: ${(props) => props.theme.weight.normal};
  }
`;