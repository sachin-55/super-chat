import React from "react";
import { styled } from "styled-components";

type DirectionType = "vertical" | "horizontal";

interface IStackProps extends React.ComponentProps<"div"> {
  direction?: DirectionType;
  space?: number;
}

const Stack: React.FC<React.PropsWithChildren<IStackProps>> = ({
  children,
  direction = "vertical",
  space,
  ...restProps
}) => {
  return (
    <StackStyled direction={direction} space={space} {...restProps}>
      {children}
    </StackStyled>
  );
};

export default Stack;

const StackStyled = styled.div<{ direction: DirectionType; space?: number }>`
  display: flex;
  align-items: ${({ direction }) =>
    direction === "horizontal" ? "center" : "start"};
  justify-content: ${({ direction }) =>
    direction === "horizontal" ? "start" : "center"};
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};
  gap: ${({ space }) => (space ? space + "px" : "20px")};
`;
