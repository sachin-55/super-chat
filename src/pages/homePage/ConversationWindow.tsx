import React from "react";
import { ConversationWindowStyled } from "./styles";
import { Avatar, Flex, Typography } from "../../components";

const ConversationWindow = () => {
  return (
    <ConversationWindowStyled>
      <div className="headings">
        <Flex>
          <Avatar size={"xsm"} />
          <div>
            <Typography fontWeight="semibold" className="fullname">
              FullName/Nickname
            </Typography>
            <Flex alignItems="center">
              <Typography className="username">@username</Typography>
              <Typography
                className="status"
                color="dark.dimGray"
                fontWeight="extrabold"
              >
                online/offline
              </Typography>
            </Flex>
          </div>
        </Flex>
      </div>
    </ConversationWindowStyled>
  );
};

export default ConversationWindow;
