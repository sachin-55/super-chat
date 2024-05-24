import styled from "styled-components";
import { StyleType } from "./type";
import { getColorValue } from "../../theme/colors";

const TypographyStyled = styled.p<StyleType>`
  color: ${({ theme, $color }) => getColorValue($color)};
  font-weight: ${({ theme, $fontWeight }) => theme.fontWeights[$fontWeight]};
  display: ${({ $inline }) => ($inline ? "inline-block" : "block")};
  font-size: ${({ theme, $size }) => theme.fontSize[$size]};
  font-family: ${({ theme, $fontFamily }) => theme.fontFamily[$fontFamily]};
  line-height: 1.5rem;
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};

  &.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default TypographyStyled;
