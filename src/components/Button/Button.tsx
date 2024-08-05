import React from "react";
import { css, styled } from "styled-components";
import { NestedColorKeys, getColorValue } from "../../theme/colors";
import { ThemeType } from "../../theme";

export type ButtonSizeType = "xsm" | "sm" | "md" | "lg" | "xl";

type VariantType =
  | "solid"
  | "ghost"
  | "link"
  | "tag"
  | "plain"
  | "outline"
  | "unstyled";

interface IButtonProps {
  variant?: VariantType;
  color?: NestedColorKeys;
  bgColor?: NestedColorKeys;
  rounded?: boolean;

  width?: string;
  height?: string;
  fontSize?: keyof ThemeType["fontSize"];
  fontFamily?: keyof ThemeType["fontFamily"];
  fontWeight?: keyof ThemeType["fontWeights"];
  padding?: string;
  margin?: string;
}

interface IButtonComponentProps extends React.ComponentProps<"button"> {
  variant?: VariantType;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset";

  size?: ButtonSizeType;
}

const Button: React.FC<
  React.PropsWithChildren<IButtonComponentProps & IButtonProps>
> = ({
  children,
  variant = "solid",
  color,
  bgColor,
  rounded = true,
  height,
  width,
  fontSize,
  fontFamily,
  fontWeight,
  margin,
  padding,
  size,
  ...restProps
}) => {
  return (
    <ButtonStyled
      variant={variant}
      color={color}
      bgColor={bgColor}
      rounded={rounded}
      $height={height}
      $width={width}
      $fontSize={fontSize}
      $fontFamily={fontFamily}
      $fontWeight={fontWeight}
      $margin={margin}
      $padding={padding}
      $size={size}
      {...restProps}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

type ButtonOptionType = {
  height: string;
  fontSize: keyof ThemeType["fontSize"];
  padding: string;
};
const buttonSizes: Record<ButtonSizeType, ButtonOptionType> = {
  xsm: {
    height: "30px",
    fontSize: "normal",
    padding: "6px 16px",
  },
  sm: {
    height: "36px",
    fontSize: "title",
    padding: "8px 20px",
  },
  md: {
    height: "42px",
    fontSize: "lTitle",
    padding: "10px 24px",
  },
  lg: {
    height: "48px",
    fontSize: "lTitle",
    padding: "12px 28px",
  },
  xl: {
    height: "54px",
    fontSize: "heading",
    padding: "14px 32px",
  },
};

const ButtonStyled = styled.button<
  IButtonProps & {
    $width?: string;
    $height?: string;
    $fontSize?: keyof ThemeType["fontSize"];
    $padding?: string;
    $margin?: string;

    $fontWeight?: keyof ThemeType["fontWeights"];
    $fontFamily?: keyof ThemeType["fontFamily"];

    $size?: ButtonSizeType;
  }
>`
  min-width: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ rounded }) => (rounded ? "20px" : "0px")};
  box-shadow: 0px 0px 3px 0px ${({ theme }) => theme?.dark?.dimGray};
  cursor: pointer;
  transition: all 0.3s;

  ${({ variant, color, bgColor }) =>
    getVariantWiseCss(variant, color, bgColor)};

  font-weight: ${({ theme, $fontWeight }) =>
    $fontWeight ? theme?.fontWeights[$fontWeight] : theme?.fontWeights?.medium};

  font-size: ${({ theme, $fontSize, $size }) =>
    $fontSize
      ? theme?.fontSize[$fontSize]
      : $size
      ? theme?.fontSize[buttonSizes[$size].fontSize]
      : theme?.fontSize.normal};

  font-family: ${({ theme, $fontFamily }) =>
    $fontFamily
      ? theme?.fontFamily[$fontFamily]
      : theme?.fontFamily?.inconsolata};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding, $size }) =>
    $padding ? $padding : $size ? buttonSizes[$size].padding : "8px 20px"};
  width: ${({ $width }) => $width};
  height: ${({ $height, $size }) =>
    $height ? $height : $size ? buttonSizes[$size].height : "40px"};
  min-height: fit-content;
  min-width: fit-content;
`;

const getVariantWiseCss = (
  variant: VariantType | undefined,
  color: NestedColorKeys | undefined,
  bgColor: NestedColorKeys | undefined
) => {
  switch (variant) {
    case "solid":
      return css`
        border: 2px solid
          ${({ theme }) =>
            getColorValue(color) || theme.colors.main.hard.primary};
        background: ${({ theme }) =>
          getColorValue(bgColor) || theme.colors.main.soft[60].primary};
        color: ${({ theme }) =>
          getColorValue(color) || theme.colors.light.snow};
        &:hover {
          background: ${({ theme }) =>
            getColorValue(color) || theme.colors.light.snow};
          border: 2px solid
            ${({ theme }) =>
              getColorValue(color) || theme.colors.main.hard.primary};
          color: ${({ theme }) =>
            getColorValue(bgColor) || theme.colors.main.hard.primary};
        }
      `;
    case "ghost":
      return css`
        border: 2px solid
          ${({ theme }) =>
            getColorValue(color) || theme.colors.main.hard.primary};
        background: transparent;
        color: ${({ theme }) => getColorValue(color) || theme.dark?.charcoal};
        &:hover {
          border: 3px solid
            ${({ theme }) =>
              getColorValue(color) || theme.colors.main.soft[50].primary};
          font-weight: 600;
        }
      `;
    case "plain":
      return css`
        border: none;
        background: ${({ theme }) =>
          getColorValue(bgColor) || theme.colors.main.soft[60].primary};
        color: ${({ theme }) =>
          getColorValue(color) || theme.colors.light.snow};
        &:hover {
          background: ${({ theme }) =>
            getColorValue(color) || theme.colors.light.snow};
          color: ${({ theme }) =>
            getColorValue(bgColor) || theme.colors.main.hard.primary};
        }
      `;
    case "link":
      return css`
        border: none;
        background: transparent;
        color: ${({ theme }) => getColorValue(color) || theme.dark?.charcoal};
        padding: 0px;
        min-width: auto;
        height: auto;
        box-shadow: none;
        &:hover {
          text-decoration: underline;
        }
      `;
    case "tag":
      return css`
        border: none;
        background: ${({ theme }) =>
          getColorValue(bgColor) || theme.colors.main.soft[60].primary};
        color: ${({ theme }) =>
          getColorValue(color) || theme.colors.light.snow};
        padding: 4px 12px;
        min-width: auto;
        height: auto;
        &:hover {
          background: none;
          border: 1px solid
            ${({ theme }) =>
              getColorValue(color) || theme.colors.main.hard.primary};
          color: ${({ theme }) =>
            getColorValue(bgColor) || theme.colors.main.hard.primary};
        }
      `;
    case "outline":
      return css`
        border: 2px solid
          ${({ theme }) =>
            getColorValue(color) || theme.colors.main.hard.primary};
        background: ${({ theme }) =>
          getColorValue(bgColor) || theme.colors.light.snow};
        color: ${({ theme }) =>
          getColorValue(color) || theme.colors.main.hard?.primary};
        &:hover {
          border: 3px solid
            ${({ theme }) =>
              getColorValue(bgColor) || theme.colors.main.soft[50].primary};
          font-weight: 600;
          color: ${({ theme }) =>
            getColorValue(bgColor) || theme.colors.light.snow};
          background: ${({ theme }) =>
            getColorValue(color) || theme.colors.main.soft[50].primary};
        }
      `;
    case "unstyled":
      return css`
        border: none;
        background: none;
        color: ${({ theme }) =>
          getColorValue(color) || theme.colors.main.hard?.primary};
        padding: 0px;
        min-width: auto;
        height: auto;
        box-shadow: none;
      `;
    default:
      return css`
        border: 2px solid
          ${({ theme }) =>
            getColorValue(color) || theme.colors.main.hard.primary};
        background: ${({ theme }) =>
          getColorValue(bgColor) || theme.colors.main.soft[60].primary};
        color: ${({ theme }) =>
          getColorValue(color) || theme.colors.light.snow};
        &:hover {
          background: ${({ theme }) =>
            getColorValue(bgColor) || theme.colors.main.soft[70].primary};
          border: 2px solid
            ${({ theme }) =>
              getColorValue(color) || theme.colors.main.soft[50].primary};
        }
      `;
  }
};
