import React from "react";
import { styled } from "styled-components";

type LabelTypeType = "inline" | "block" | "inline-block";

interface ILabelProps extends React.ComponentProps<"div"> {
  label: string;
  labelType?: LabelTypeType;
}

const FormLabel = ({
  label,
  labelType = "block",
  ...restProps
}: ILabelProps) => {
  return (
    <FormLabelStyled labelType={labelType} {...restProps}>
      {label}
    </FormLabelStyled>
  );
};

export default FormLabel;

const FormLabelStyled = styled.div<{ labelType: LabelTypeType }>`
  display: ${({ labelType }) => labelType || "block"};
  margin-bottom: 5px;
  font-size: 1.2em;
`;
