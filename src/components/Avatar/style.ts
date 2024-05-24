import styled from "styled-components";

import { SizeType } from ".";

const getSizes = (size: SizeType) => {
  if (typeof size === "number") {
    return `${size}px`;
  }
  switch (size) {
    case "xxl":
      return "88px";
    case "xl":
      return "65px";
    case "lg":
      return "47px";
    case "md":
      return "34px";
    case "sm":
      return "31px";
    case "xsm":
      return "25px";

    default:
      return "34px";
  }
};

const AvatarStyled = styled.div<{ $size: SizeType }>`
  position: relative;
  height: ${({ $size }) => getSizes($size)};
  width: ${({ $size }) => getSizes($size)};
  border-radius: 50%;
  overflow: hidden;
`;

export default AvatarStyled;
