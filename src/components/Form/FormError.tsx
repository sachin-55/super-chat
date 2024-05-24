import React from "react";
import { styled } from "styled-components";

interface Props extends React.ComponentProps<"div"> {
  error: string;
}

const FormError = ({ error, ...restProps }: Props) => {
  return (
    <FormErrorStyled className="error-message" {...restProps}>
      {error}
    </FormErrorStyled>
  );
};

export default FormError;

const FormErrorStyled = styled.div`
  color: ${({ theme }) => theme?.main?.danger};
  font-size: ${({ theme }) => theme?.fontSize?.caption};
`;
