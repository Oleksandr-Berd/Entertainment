import styled from "styled-components"

export const PageContainer = styled.div`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: 61px;
  padding-right: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};
`;

export const Title = styled.h2`
margin-bottom: ${props => props.theme.space[6]};

font-size: ${props => props.theme.size.XN};
font-weight: ${props => props.theme.weight.normal};
`