import React from "react";
import { ConversationWindowStyled } from "./styles";
import { Avatar, Flex, Typography } from "../../components";
import { CreateNewMessage } from "./components/CreateNewMessage";
import { Messages } from "./components/Messages";

const ConversationWindow = () => {
  return (
    <ConversationWindowStyled>
      <div className="headings">
        <Flex alignItems="center">
          <Avatar size={"lg"} />
          <div>
            <Typography fontWeight="semibold" className="fullname">
              FullName/Nickname
            </Typography>
            <Flex alignItems="center">
              <Typography className="username">@username</Typography>
              <Typography
                className="status"
                color="text"
                fontWeight="extrabold"
              >
                online/offline
              </Typography>
            </Flex>
          </div>
        </Flex>
      </div>
      <Messages conversationId="98797" />
      <CreateNewMessage />
    </ConversationWindowStyled>
  );
};

export default ConversationWindow;
