import React from "react";
import { ConversationListStyled, IndividualConversationStyled } from "./styles";
import { Avatar, Typography } from "../../components";

type Props = {};

const ConversationList = (props: Props) => {
  return (
    <ConversationListStyled>
      <IndividualConversationStyled>
        <Avatar />
        <Typography>Fullname/Nickname</Typography>
        <Typography>Last message in a single truncated formatted</Typography>
      </IndividualConversationStyled>
    </ConversationListStyled>
  );
};

export default ConversationList;
