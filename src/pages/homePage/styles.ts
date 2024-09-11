import styled from "styled-components";

export const HomepageStyled = styled.div`
  display: flex;
  height: calc(100vh - 40px);
`;

export const UserContainerStyled = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 300px;
`;

export const UserInfoStyled = styled.div`
  padding: 10px 10px;
  display: flex;
  gap: 6px;
  box-shadow: inset 0px 0px 6px 1px rgba(0, 0, 0, 0.5);
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
`;

export const ConversationListStyled = styled.div`
  background-color: #fff;
  height: calc(100% - 60px);
  overflow-y: auto;
`;

export const ConversationWindowStyled = styled.div`
  flex: 1;
  min-width: 400px;
  background-color: rgba(0, 0, 0, 0.07);

  & .headings {
    padding: 8px 15px;
    box-shadow: 1px 0px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: #fff;

    & .fullname,
    & .username,
    & .status {
      line-height: 1;
    }
    & .fullname {
      font-size: 1rem;
    }
    & .status {
      font-size: 0.7rem;
    }
  }
`;

export const IndividualConversationStyled = styled.div``;
