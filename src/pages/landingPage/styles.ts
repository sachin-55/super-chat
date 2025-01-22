import { styled } from "styled-components";

export const LandingPageStyled = styled.div`
  padding: 50px 30px;
  overflow: hidden;
  height: calc(100vh - 0px);
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  position: relative;
  & h2 {
    font-size: 3em;
    text-align: center;
  }
  & p {
    text-align: center;
  }
`;
