import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const CommonContainer = styled.div`
  padding-top: ${(props) => props.theme.space[11]};
  padding-bottom: 170px;
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};

  text-align: center;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};

  margin-top: 60px;

  background-color: ${(props) => props.theme.color.semiDark};

  border-radius: ${props => props.theme.radius[1]};

  & > *:not(:last-child){
    margin-bottom: ${props => props.theme.space[7]};
  }
`;

export const LabelStyled = styled.label`
  display: inline-block;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};

  background-color: ${(props) => props.theme.color.red};
  color: ${(props) => props.theme.color.white};
  border-radius: ${(props) => props.theme.radius[0]};

  cursor: pointer;
`;

export const InputStyled = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};

  background-color: ${(props) => props.theme.color.red};
  color: ${(props) => props.theme.color.white};
  font-weight: ${(props) => props.theme.weight.normal};

  border: none;
  border-radius: ${(props) => props.theme.radius[0]};
`;

export const BackLink = styled(NavLink)`
color: ${props => props.theme.color.white};
`