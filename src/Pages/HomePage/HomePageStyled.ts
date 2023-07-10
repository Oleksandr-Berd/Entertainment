import styled from "styled-components"

export const CommonContainer = styled.div`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: 61px;
  padding-right: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};
`;

export const Title = styled.h2`
font-size: ${props => props.theme.size.XN};
font-weight: ${props => props.theme.weight.light};
line-height: 1;
letter-spacing: -0.31px;


`