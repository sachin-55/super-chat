import styled from "styled-components";
import { flexCenter } from "../../style/reusableStyle";

export const RegisterPageStyled = styled.div`
  position: relative;
  ${flexCenter()};
  flex-direction: column;
  height: calc(100vh - 42px);
  overflow: hidden;
  & .desc {
    text-align: center;
    max-width: 700px;
  }
`;
