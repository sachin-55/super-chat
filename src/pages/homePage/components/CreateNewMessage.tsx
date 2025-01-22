import styled from "styled-components";
import { Button, Textarea } from "../../../components";

type Props = {};

export const CreateNewMessage = (props: Props) => {
  return (
    <CreateNewMessageStyled>
      <Textarea />
      <Button
        variant="outline"
        bgColor="primary"
        color="text"
        onClick={() => {}}
        size="sm"
        padding="0px 30px"
      >
        Fly
      </Button>
    </CreateNewMessageStyled>
  );
};

const CreateNewMessageStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
`;
