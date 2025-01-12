import styled from "styled-components";
import { Logo } from "../../components";

type Props = {};

export const ConversationHeader = (props: Props) => {
  return (
    <ConversationHeaderStyled>
      <Logo size={24} />
    </ConversationHeaderStyled>
  );
};

const ConversationHeaderStyled = styled.div`
  height: 60px;
  width: 100%;
  padding-left: 20px;
  padding-top: 10px;
  border-bottom: 1px solid #dbdbdb;
`;
