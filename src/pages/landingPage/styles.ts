import { styled } from "styled-components";

export const LandingPageStyled = styled.div`
  padding: 50px 30px;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;

  & h2 {
    font-size: 3.5em;
  }
`;
