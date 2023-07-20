import styled from "styled-components"

export const CommonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 26px;

  @media (min-width: 768px) {
    margin-bottom: 34px;
  }
`;

export const SearchInput = styled.input`
  min-width: ${(props) => props.theme.percentage[8]};

  margin-left: ${(props) => props.theme.space[4]};

  font-size: ${(props) => props.theme.size.N};
  color: ${(props) => props.theme.color.white};
  background-color: transparent;
  font-weight: ${(props) => props.theme.normal};

  border: none;

  @media (min-width: 768px) {
    margin-left: ${(props) => props.theme.space[6]};
  }
`;