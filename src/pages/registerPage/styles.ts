import styled from "styled-components";
import { flexCenter } from "../../style/reusableStyle";

export const RegisterPageStyled = styled.div`
  ${flexCenter()};
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  min-height: calc(100vh - 50px);

  & .desc {
    text-align: center;
  }
`;
