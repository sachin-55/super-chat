import styled from "styled-components";
import { IndividualMessage } from "./IndividualMessage";

type Props = {
  conversationId: string;
};

export const Messages = ({ conversationId }: Props) => {
  return (
    <MessagesStyled>
      <IndividualMessage message="kjasnakjn" isMine />
      <IndividualMessage message="kjasnakjn" isMine={false} />
      <IndividualMessage message="kjasnakjn" isMine />
    </MessagesStyled>
  );
};
const MessagesStyled = styled.div`
  flex: 1;
`;
