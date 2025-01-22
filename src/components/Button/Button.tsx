import React from "react";
import { css, styled } from "styled-components";
import { ThemeType } from "../../theme";
import { ColorsKeysType } from "../../theme/colors";

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
  box-shadow: 0px 0px 3px 0px ${({ theme }) => theme?.colors.border};
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
  color: ColorsKeysType | undefined,
  bgColor: ColorsKeysType | undefined
) => {
  switch (variant) {
    case "solid":
      return css`
        border: 2px solid
          ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.border};
        background: ${({ theme }) =>
          bgColor ? theme.colors?.[bgColor] : theme.colors.primary};
        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.text};
        &:hover {
          background: ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.highlight};
          border: 2px solid
            ${({ theme }) =>
              color ? theme.colors?.[color] : theme.colors.accent};
          color: ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.text};
        }
      `;
    case "ghost":
      return css`
        border: 2px solid
          ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.primary};
        background: transparent;
        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.text};
        &:hover {
          border: 3px solid
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
          color ? theme.colors?.[color] : theme.colors.text};
        &:hover {
          background: ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.secondary};
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
        box-shadow: none;
        &:hover {
          text-decoration: underline;
        }
      `;
    case "tag":
      return css`
        border: none;
        background: ${({ theme }) =>
          bgColor ? theme.colors?.[bgColor] : theme.colors.primary};
        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.text};
        padding: 4px 12px;
        min-width: auto;
        height: auto;
        &:hover {
          background: none;
          border: 1px solid
            ${({ theme }) =>
              color ? theme.colors?.[color] : theme.colors.primary};
          color: ${({ theme }) =>
            bgColor ? theme.colors?.[bgColor] : theme.colors.info};
        }
      `;
    case "outline":
      return css`
        border: 2px solid
          ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.primary};

        background: ${({ theme }) =>
          bgColor ? theme.colors?.[bgColor] : theme.colors.primary};

        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.primary};
        &:hover {
          border: 3px solid
            ${({ theme }) =>
              color ? theme.colors?.[color] : theme.colors.primary};
          font-weight: 600;
          color: ${({ theme }) =>
            bgColor ? theme.colors?.[bgColor] : theme.colors.primary};

          background: ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.primary};
        }
      `;
    case "unstyled":
      return css`
        border: none;
        background: none;
        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.primary};
        padding: 0px;
        min-width: auto;
        height: auto;
        box-shadow: none;
      `;
    default:
      return css`
        border: 2px solid
          ${({ theme }) =>
            color ? theme.colors?.[color] : theme.colors.primary};

        background: ${({ theme }) =>
          bgColor ? theme.colors?.[bgColor] : theme.colors.primary};
        color: ${({ theme }) =>
          color ? theme.colors?.[color] : theme.colors.primary};
        &:hover {
          background: ${({ theme }) =>
            bgColor ? theme.colors?.[bgColor] : theme.colors.primary};
          border: 2px solid
            ${({ theme }) =>
              color ? theme.colors?.[color] : theme.colors.primary};
        }
      `;
  }
};
