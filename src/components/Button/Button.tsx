import React from "react";
import { css, styled } from "styled-components";
import ITheme from "../../theme/theme.interface";

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
  color?: string;
  bgColor?: string;
  rounded?: boolean;
}

interface IButtonComponentProps extends React.ComponentProps<"button"> {
  variant?: VariantType;
}

const Button: React.FC<
  React.PropsWithChildren<IButtonComponentProps & IButtonProps>
> = ({
  children,
  variant = "solid",
  color,
  bgColor,
  rounded = true,
  ...restProps
}) => {
  return (
    <ButtonStyled
      variant={variant}
      color={color}
      bgColor={bgColor}
      rounded={rounded}
      {...restProps}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button<
  {
    theme: ITheme;
  } & IButtonProps
>`
  height: 40px;
  min-width: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ rounded }) => (rounded ? "20px" : "0px")};
  box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.dark.dimGray};
  cursor: pointer;
  transition: all 0.3s;

  ${({ variant, color, bgColor }) =>
    getVariantWiseCss(variant, color, bgColor)};
`;

const getVariantWiseCss = (
  variant: VariantType | undefined,
  color: string | undefined,
  bgColor: string | undefined
) => {
  switch (variant) {
    case "solid":
      return css`
        border: 2px solid ${({ theme }) => color || theme.main.hard.primary};
        background: ${({ theme }) => bgColor || theme.main.soft[60].primary};
        color: ${({ theme }) => color || theme.light.snow};
        &:hover {
          background: ${({ theme }) => color || theme.light.snow};
          border: 2px solid ${({ theme }) => color || theme.main.hard.primary};
          color: ${({ theme }) => bgColor || theme.main.hard.primary};
        }
      `;
    case "ghost":
      return css`
        border: 2px solid ${({ theme }) => color || theme.main.hard.primary};
        background: transparent;
        color: ${({ theme }) => color || theme.dark?.charcoal};
        &:hover {
          border: 3px solid
            ${({ theme }) => color || theme.main.soft[50].primary};
          font-weight: 600;
        }
      `;
    case "plain":
      return css`
        border: none;
        background: ${({ theme }) => bgColor || theme.main.soft[60].primary};
        color: ${({ theme }) => color || theme.light.snow};
        &:hover {
          background: ${({ theme }) => color || theme.light.snow};
          color: ${({ theme }) => bgColor || theme.main.hard.primary};
        }
      `;
    case "link":
      return css`
        border: none;
        background: transparent;
        color: ${({ theme }) => color || theme.dark?.charcoal};
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
        background: ${({ theme }) => bgColor || theme.main.soft[60].primary};
        color: ${({ theme }) => color || theme.light.snow};
        padding: 4px 12px;
        min-width: auto;
        height: auto;
        &:hover {
          background: none;
          border: 1px solid ${({ theme }) => color || theme.main.hard.primary};
          color: ${({ theme }) => bgColor || theme.main.hard.primary};
        }
      `;
    case "outline":
      return css`
        border: 2px solid ${({ theme }) => color || theme.main.hard.primary};
        background: ${({ theme }) => bgColor || theme.light.snow};
        color: ${({ theme }) => color || theme.main.hard?.primary};
        &:hover {
          border: 3px solid
            ${({ theme }) => bgColor || theme.main.soft[50].primary};
          font-weight: 600;
          color: ${({ theme }) => bgColor || theme.light.snow};
          background: ${({ theme }) => color || theme.main.soft[50].primary};
        }
      `;
    case "unstyled":
      return css`
        border: none;
        background: none;
        color: ${({ theme }) => color || theme.main.hard?.primary};
        padding: 0px;
        min-width: auto;
        height: auto;
        box-shadow: none;
      `;
    default:
      return css`
        border: 2px solid ${({ theme }) => color || theme.main.hard.primary};
        background: ${({ theme }) => bgColor || theme.main.soft[60].primary};
        color: ${({ theme }) => color || theme.light.snow};
        &:hover {
          background: ${({ theme }) => bgColor || theme.main.soft[70].primary};
          border: 2px solid
            ${({ theme }) => color || theme.main.soft[50].primary};
        }
      `;
  }
};
