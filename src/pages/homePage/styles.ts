import styled from "styled-components";

export const HomepageStyled = styled.div`
  display: flex;
  height: calc(100vh - 40px);
`;

export const UserContainerStyled = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  box-shadow: inset 0px 0px 6px 1px rgba(0, 0, 0, 0.5);

  & .heading-wrapper {
    padding: 15px 10px;
    display: flex;
    gap: 6px;
    & .name {
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1;
    }
    & .username {
      font-weight: 700;
      line-height: 1;
      font-style: oblique;
    }
  }
`;
export const ConversationWindowStyled = styled.div`
  flex: 1;
  min-width: 400px;
  background-color: rgba(0, 0, 0, 0.07);
`;
