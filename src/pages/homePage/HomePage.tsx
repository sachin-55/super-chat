import React from "react";
import {
  ConversationWindowStyled,
  HomepageStyled,
  UserContainerStyled,
} from "./styles";
import { Avatar, Typography } from "../../components";

const HomePage = () => {
  return (
    <HomepageStyled>
      <UserContainerStyled>
        <div className="heading-wrapper">
          <Avatar size="xsm" />
          <div>
            <Typography className="name" size="title">
              Sachin Bhattarai
            </Typography>
            <Typography className="username" size="caption">
              @sachin_bhattarai
            </Typography>
          </div>
        </div>
      </UserContainerStyled>
      <ConversationWindowStyled></ConversationWindowStyled>
    </HomepageStyled>
  );
};

export default HomePage;
