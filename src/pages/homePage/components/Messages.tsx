import styled from "styled-components";
import { IndividualMessageStyled } from "./style";
import { Button, Typography } from "../../../components";

type Props = {
  conversationId: string;
};

export const Messages = ({ conversationId }: Props) => {
  return (
    <MessagesStyled>
      <IndividualMessage message="kjasnakjn" isMine />
      <IndividualMessage message="kjasnakjn" isMine={false} />
      <IndividualMessage message="kjasnakjn" isMine />
      <Button variant="solid" size="xl">
        HELLO
      </Button>
      <Button variant="ghost">HELLO</Button>
      <Button variant="plain" isLoading isDisabled>
        HELLO
      </Button>
      <Button variant="link">HELLO</Button>
      <Button variant="outline" isDisabled>
        HELLO
      </Button>
      <Button variant="pill">HELLO</Button>
      <Button variant="unstyled">HELLO</Button>
      <Button rounded>HELLO</Button>
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
