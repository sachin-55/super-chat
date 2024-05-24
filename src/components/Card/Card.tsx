import React from "react";
import { styled } from "styled-components";

type CardStylePropsType = {
  noPadding?: boolean;
  borderRadius?: number;
};
interface ICardProps extends React.ComponentProps<"div"> {}

const Card: React.FC<
  React.PropsWithChildren<ICardProps & CardStylePropsType>
> = ({ children, noPadding = false, borderRadius = 20, ...restProps }) => {
  return (
    <CardStyled
      noPadding={noPadding}
      borderRadius={borderRadius}
      {...restProps}
    >
      {children}
    </CardStyled>
  );
};

export default Card;

const CardStyled = styled.div<CardStylePropsType>`
  padding: ${({ noPadding }) => (noPadding ? 0 : "30px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius + "px" : "30px"};
  box-shadow: 0px 0px 6px 0px ${({ theme }) => theme?.dark?.davysGrey};
  margin: 0 auto;
`;
