import React from "react";
import { css, styled } from "styled-components";
import { ThemeType } from "../../theme";
import { ColorsKeysType } from "../../theme/colors";

export type ButtonSizeType = "xsm" | "sm" | "md" | "lg" | "xl";

type VariantType =
  | "solid"
  | "ghost"
  | "link"
  | "pill"
  | "plain"
  | "outline"
  | "unstyled";

interface IButtonProps {
  variant?: VariantType;
  color?: ColorsKeysType;
  bgColor?: ColorsKeysType;
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
  isLoading,
  isDisabled,
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
      $loading={isLoading}
      $disabled={isDisabled}
      {...restProps}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

type ButtonOptionType = {
  minHeight: string;
  fontSize: keyof ThemeType["fontSize"];
  padding: string;
};
const buttonSizes: Record<ButtonSizeType, ButtonOptionType> = {
  xsm: {
    minHeight: "24px",
    fontSize: "normal",
    padding: "4px 14px",
  },
  sm: {
    minHeight: "30px",
    fontSize: "title",
    padding: "6px 18px",
  },
  md: {
    minHeight: "40px",
    fontSize: "lTitle",
    padding: "8px 20px",
  },
  lg: {
    minHeight: "46px",
    fontSize: "heading",
    padding: "10px 24px",
  },
  xl: {
    minHeight: "52px",
    fontSize: "lHeading",
    padding: "12px 30px",
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

    $disabled?: boolean;
    $loading?: boolean;
  }
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ rounded }) => (rounded ? "24px" : "0px")};

  cursor: ${({ $disabled, $loading }) =>
    $loading ? "progress" : $disabled ? "not-allowed" : "pointer"};
  transition: all 0.3s;
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};

  font-weight: ${({ theme, $fontWeight }) =>
    $fontWeight
      ? theme?.fontWeights[$fontWeight]
      : theme?.fontWeights?.regular};

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
  min-width: ${({ $width }) => $width || "fit-content"};
  min-height: ${({ $height, $size }) =>
    $height ? $height : $size ? buttonSizes[$size].minHeight : "fit-content"};
  ${({ variant, color, bgColor }) =>
    getVariantWiseCss(variant, color, bgColor)};
`;

const getVariantWiseCss = (
  variant: VariantType | undefined,
  color: ColorsKeysType | undefined,
  bgColor: ColorsKeysType | undefined
) => {
  switch (variant) {
    case "solid":
      return css`
        border: 2px solid
          ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.invertedText};
        background: ${({ theme }) =>
          bgColor ? theme.colors?.[bgColor] : theme.colors.primary};
        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.invertedText};
        &:hover {
          background: ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.invertedText};
          border: 2px solid
            ${({ theme }) =>
              bgColor ? theme.bgColors?.[bgColor] : theme.colors.primary};
          color: ${({ theme }) =>
            bgColor ? theme.colors?.[bgColor] : theme.colors.primary};
        }
      `;
    case "ghost":
      return css`
        border: 2px solid
          ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.transparent};
        background: transparent;
        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.text};
        &:hover {
          border: 2px solid
            ${({ theme }) =>
              color ? theme.colors?.[color] : theme.colors.border};
          font-weight: 600;
        }
      `;
    case "plain":
      return css`
        border: none;
        background: ${({ theme }) =>
          bgColor ? theme.colors?.[bgColor] : theme.colors.primary};
        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.invertedText};
        &:hover {
          background: ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.invertedText};
          color: ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.primary};
        }
      `;
    case "link":
      return css`
        border: none;
        background: transparent;
        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.info};
        padding: 0px;
        min-width: auto;
        height: auto;
        width: fit-content;
        box-shadow: none;
        &:hover {
          text-decoration: underline;
        }
      `;
    case "pill":
      return css`
        border: none;
        background: ${({ theme }) =>
          bgColor ? theme.colors?.[bgColor] : theme.colors.primary};
        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.invertedText};
        padding: 4px 12px;
        min-width: fit-content;
        min-height: fit-content;
        font-size: ${({ theme }) => theme.fontSize.caption};
        &:hover {
          background: ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.invertedText};
          color: ${({ theme }) =>
            bgColor ? theme.colors?.[bgColor] : theme.colors.primary};
        }
      `;
    case "outline":
      return css`
        border: 2px solid
          ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.primary};

        background: ${({ theme }) =>
          bgColor ? theme.colors?.[bgColor] : theme.colors.transparent};

        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.primary};
        &:hover {
          border: 2px solid
            ${({ theme }) =>
              color ? theme.colors?.[color] : theme.colors.primary};
          color: ${({ theme }) =>
            bgColor ? theme.colors?.[bgColor] : theme.colors.invertedText};

          background: ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.primary};
        }
      `;
    case "unstyled":
      return css`
        all: initial;
        border: none;
        background: none;
        color: ${({ theme }) => (color ? theme.colors?.[color] : "inherit")};
        padding: 0px;
        min-width: auto;
        height: auto;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        outline: none;
        box-sizing: border-box;
        max-width: fit-content;
        font-family: inherit;
      `;
    default:
      return css`
        border: 2px solid
          ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.invertedText};
        background: ${({ theme }) =>
          bgColor ? theme.colors?.[bgColor] : theme.colors.primary};
        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.invertedText};
        &:hover {
          background: ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.invertedText};
          border: 2px solid
            ${({ theme }) =>
              bgColor ? theme.bgColors?.[bgColor] : theme.colors.primary};
          color: ${({ theme }) =>
            bgColor ? theme.colors?.[bgColor] : theme.colors.primary};
        }
      `;
  }
};
