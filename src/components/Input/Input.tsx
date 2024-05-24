import React from "react";
import { styled } from "styled-components";

interface IInputProps extends React.ComponentProps<"input"> {}

const Input = ({ ...restProps }: IInputProps) => {
  return <InputStyled {...restProps} />;
};

export default Input;

const InputStyled = styled.input`
  width: 100%;

  border-radius: 0.5em;
  padding: 0.5em 1em;
  font-size: 1.1em;

  border: 1px solid ${({ theme }) => theme?.dark?.licorice};

  &:focus {
    border: 1px solid ${({ theme }) => theme?.main?.primary};
    outline-color: ${({ theme }) => theme?.main?.primary};
  }

  &::placeholder {
    font-size: 1em;
    font-weight: 200;
    letter-spacing: 1px;
  }
`;
