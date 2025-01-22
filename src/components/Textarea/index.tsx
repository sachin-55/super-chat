import { useRef, useState } from "react";
import styled from "styled-components";
import { scrollCss } from "../../style/reusableStyle";

interface ITextAreaProps extends React.ComponentProps<"textarea"> {
  placeholder?: string;
  maxLength?: number;
  style?: React.CSSProperties;
  showCount?: boolean;
  minRows?: number;
  maxHeight?: number;
}

const TextArea = ({
  onChange,
  minRows = 1,
  maxHeight = 100,
  style,
  maxLength,
  showCount,
  placeholder,

  ...restProps
}: ITextAreaProps) => {
  const [rows, setRows] = useState<number>(minRows);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const value = restProps?.value;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event);
    }

    // Calculate number of rows based on content height
    const textareaLineHeight = 20; // Adjust this value based on your design
    const previousRows = event.target.rows;
    if (textareaRef.current) {
      // Reset rows to minimum to calculate scroll height
      textareaRef.current.rows = minRows;
    }

    event.target.rows = minRows; // Reset rows to minimum to calculate scroll height

    const currentRows = Math.floor(
      event.target.scrollHeight / textareaLineHeight
    );

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    setRows(currentRows < minRows ? minRows : currentRows);
  };

  return (
    <TextAreaWrapper>
      <TextareaStyled
        ref={textareaRef}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={maxLength}
        rows={rows}
        $maxHeight={maxHeight}
        {...restProps}
      />
      {showCount && value && typeof value !== "number" && (
        <CountWrapper>
          {value?.length !== 0 ? value.length : ""}/{maxLength}
        </CountWrapper>
      )}
    </TextAreaWrapper>
  );
};

export default TextArea;

export const TextAreaWrapper = styled.div`
  width: 100%;
`;

const TextareaStyled = styled.textarea<{ $maxHeight?: number }>`
  width: 100%;

  resize: none;

  border-radius: 0.5em;
  padding: 0.5em 1em;
  font-size: 1.1em;
  max-height: ${(p) => `${p.$maxHeight}px`};

  border: 1px solid ${({ theme }) => theme?.dark?.licorice};

  &:focus {
    border: 1px solid ${({ theme }) => theme?.main?.primary};
    outline-color: ${({ theme }) => theme?.main?.primary};
  }

  &::placeholder {
    font-size: 1em;
    font-weight: 200;
    letter-spacing: 1px;
  }

  ${scrollCss};
`;

export const CountWrapper = styled.div`
  height: 14px;
  width: 100%;
  text-align: right;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;
