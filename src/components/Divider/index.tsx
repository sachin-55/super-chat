import React from "react";
import styled from "styled-components";

import { flexCenter } from "../../style/reusableStyle";
import Typography from "../../components/Typography";
import { NestedColorKeys, getColorValue } from "../../theme/colors";

const DividerWrapper = styled.div<{
  $orientation: string;
  $bgColor?: NestedColorKeys;
  $spaceX: string;
  $spaceY: string;
}>`
  width: ${(props) => (props.$orientation === "vertical" ? "1px" : "100%")};
  height: ${(props) => (props.$orientation === "horizontal" ? "1px" : "auto")};
  max-height: 100%;
  background-color: ${(props) =>
    getColorValue(props.$bgColor) || props.theme?.colors?.dark.dimGray};
  margin: ${(props) =>
    props.$orientation === "horizontal"
      ? ` ${props.$spaceY} 0px`
      : `0px ${props.$spaceX}`};

  ${flexCenter(0)}
  & .divider-text {
    text-align: center;
    background-color: #fcfcfc;
    padding: 0px 5px;
  }
`;

const Divider = ({
  orientation = "horizontal",
  style,
  bgColor,
  spaceX = "18px",
  spaceY = "18px",
  text,
  textStyle,
}: DividerProps) => {
  return (
    <DividerWrapper
      $orientation={orientation}
      style={style}
      $bgColor={bgColor}
      $spaceX={spaceX}
      $spaceY={spaceY}
    >
      {text && (
        <Typography style={textStyle} className="divider-text">
          {text}
        </Typography>
      )}
    </DividerWrapper>
  );
};

export default Divider;

interface DividerProps {
  orientation?: "vertical" | "horizontal";
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  bgColor?: NestedColorKeys;
  spaceX?: string;
  spaceY?: string;
  text?: string;
}
