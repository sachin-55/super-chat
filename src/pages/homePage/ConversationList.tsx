import React from "react";
import { ConversationListStyled, IndividualConversationStyled } from "./styles";
import { Avatar, Typography } from "../../components";

type Props = {};

const ConversationList = (props: Props) => {
  return (
    <ConversationListStyled>
      <Typography
        size="heading"
        fontWeight="black"
        padding="10px 12px"
        className="title"
      >
        Conversations
      </Typography>
      <div className="list-container">
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
        <IndividualConversation />
      </div>
    </ConversationListStyled>
  );
};

export default ConversationList;

const IndividualConversation = () => {
  return (
    <IndividualConversationStyled>
      <Avatar />
      <div>
        <Typography size="title" fontWeight="bold">
          Fullname/Nickname
        </Typography>
        <Typography size="caption" fontWeight="medium">
          Last message in a single truncated formatted
        </Typography>
      </div>
    </IndividualConversationStyled>
  );
};
