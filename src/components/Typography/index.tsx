import React from "react";

import TypographyStyled from "./style";
import { AsType, FontFamilyType, FontWeightType, SizeType } from "./type";
import { ColorsKeysType } from "../../theme/colors";

export interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
  fontFamily?: FontFamilyType;
  color?: ColorsKeysType;
  size?: SizeType;
  fontWeight?: FontWeightType;
  inline?: boolean;
  as?: AsType;
  style?: React.CSSProperties;
  ellipsis?: boolean;
  margin?: string;
  padding?: string;
  [key: string]: any;
}

const Typography = ({
  color = "text",
  fontFamily = "inconsolata",
  inline = false,
  size = "normal",
  fontWeight = "regular",
  children,
  as = "p",
  ellipsis = false,
  className,
  margin = "0px",
  padding = "0px",
  ...restProps
}: ITypographyProps) => {
  return (
    <TypographyStyled
      as={inline ? "span" : as}
      $inline={inline}
      $color={color}
      $fontFamily={fontFamily}
      $size={size}
      $fontWeight={fontWeight}
      $margin={margin}
      $padding={padding}
      className={`${className} ${ellipsis ? "ellipsis" : ""}`}
      {...restProps}
    >
      {children}
    </TypographyStyled>
  );
};

export default Typography;
