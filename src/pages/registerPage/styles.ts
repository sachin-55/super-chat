import styled from "styled-components";
import { flexCenter } from "../../style/reusableStyle";

export const RegisterPageStyled = styled.div`
  position: relative;
  ${flexCenter()};
  flex-direction: column;
  min-height: calc(100vh - 0px);

  & .desc {
    text-align: center;
    max-width: 700px;
  }
`;
