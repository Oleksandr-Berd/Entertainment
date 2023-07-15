import styled from "styled-components"

export const SearchList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.space[4]};

  margin-top: ${(props) => props.theme.space[6]};
`;