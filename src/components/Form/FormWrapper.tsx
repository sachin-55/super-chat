import React from "react";
import { styled } from "styled-components";

type DirectionType = "column" | "row";

interface IFormWrapperProps extends React.ComponentProps<"div"> {
  direction?: DirectionType;
  hasError?: boolean;
}

const FormWrapper: React.FC<React.PropsWithChildren<IFormWrapperProps>> = ({
  children,
  direction = "column",
  hasError = false,
  ...restProps
}) => {
  return (
    <FormWrapperStyled direction={direction} hasError={hasError} {...restProps}>
      {children}
    </FormWrapperStyled>
  );
};

export default FormWrapper;
const FormWrapperStyled = styled.div<{
  direction: DirectionType;
  hasError: boolean;
}>`
  display: flex;
  align-items: ${({ direction }) => (direction === "row" ? "center" : "start")};
  justify-content: start;
  flex-direction: ${({ direction }) => direction || "column"};
  position: relative;
  padding: ${({ hasError }) =>
    hasError ? "0px 0px 18px 0px" : "0px 0px 0px 0px"};

  & .error-message {
    display: ${({ hasError }) => (hasError ? "block" : "none")};
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
`;
