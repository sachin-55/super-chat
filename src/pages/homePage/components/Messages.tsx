import styled from "styled-components";
import { IndividualMessageStyled } from "./style";
import { Typography } from "../../../components";

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

const IndividualMessage = ({
  isMine,
  message,
}: {
  message: string;
  isMine: boolean;
}) => {
  return (
    <IndividualMessageStyled>
      <Typography>{message}</Typography>
    </IndividualMessageStyled>
  );
};
