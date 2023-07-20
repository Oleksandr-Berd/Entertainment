import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: ${(props) => props.theme.space[11]};
  padding-top: ${(props) => props.theme.space[8]};
  padding-bottom: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[5]};
  padding-right: ${(props) => props.theme.space[5]};

  background-color: ${(props) => props.theme.color.semiDark};

  border-radius: ${(props) => props.theme.radius[4]};

  @media (min-width: 768px) {
    margin-top: ${(props) => props.theme.space[13]};

    padding-top: ${(props) => props.theme.space[8]};
    padding-bottom: ${(props) => props.theme.space[8]};
    padding-left: ${(props) => props.theme.space[8]};
    padding-right: ${(props) => props.theme.space[8]};
  }
`;

export const TitleContainer = styled.div`
  text-align: left;
`;

export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.space[7]};

  font-weight: ${(props) => props.theme.weight.normal};
  font-size: ${(props) => props.theme.size.XN};

  @media (min-width: 768px) {
    margin-bottom: ${(props) => props.theme.space[10]};

    font-size: ${(props) => props.theme.size.M};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding-left: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[5]};

  background-color: transparent;
  color: ${(props) => props.theme.color.white};

  border: none;

  border-bottom: 1px solid ${(props) => props.theme.color.secondary};

  @media (min-width: 768px) {
    padding-left: 18px;
    padding-bottom: 18px;
  }
`;

export const StyledButton = styled.button`
  width: ${(props) => props.theme.percentage[10]};

  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[10]};

  background-color: ${(props) => props.theme.color.red};
  color: ${(props) => props.theme.color.white};
  font-weight: ${(props) => props.theme.weight.normal};

  border: none;
  border-radius: ${(props) => props.theme.radius[0]};

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #ff8181;
    cursor: pointer;
    color: #ededed;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
`;

export const Text = styled.p`
  font-weight: ${(props) => props.theme.weight.normal};
  font-size: ${(props) => props.theme.size.S};

  @media (min-width: 768px) {
    margin-right: 9px;

    font-size: ${(props) => props.theme.size.N};
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;

  margin-top: ${(props) => props.theme.space[2]};

  text-decoration: none;

  color: ${(props) => props.theme.color.red};
  font-weight: ${(props) => props.theme.weight.normal};
  font-size: ${(props) => props.theme.size.S};

  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.color.red};
    transition: color 0.3s ease-in-out;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: ${(props) => props.theme.size.N};
  }
`;

export const ErrorStyled = styled.span`
  margin-top: ${(props) => props.theme.space[2]};

  color: ${(props) => props.theme.color.red};

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[7]};
  }

  &:last-child {
    margin-bottom: ${(props) => props.theme.space[11]};
  }
`;

export const LinkContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
