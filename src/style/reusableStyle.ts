import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// Pseudo classes for scrollbar
// :horizontal
// :vertical
// :decrement
// :increment
// :start
// :end
// :double-button
// :single-button
// :no-button
// :corner-present
// :window-inactive

export const scrollCss = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-button {
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  &::-webkit-scrollbar-track-piece {
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.highlight};
  }

  &::-webkit-scrollbar-corner {
  }

  &::-webkit-resizer {
  }
`;

export const singleLineTextEllipse = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const multipleLineTextEllipse = (lineNumber?: number) => css`
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis; /* Include for consistency */

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lineNumber || 3};
`;

export const flexCenter = (gap?: number) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${gap || 10}px;
`;

export const flexSpaceBetween = (gap?: number) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${gap || 10}px;
`;

export const flexEnd = (gap?: number) => css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${gap || 10}px;
`;

export const flexStart = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const hideAppearance = css`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;
