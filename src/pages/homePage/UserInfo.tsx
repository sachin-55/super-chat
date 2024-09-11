import React from "react";
import { UserInfoStyled } from "./styles";
import { Avatar, Typography } from "../../components";

type Props = {};

const UserInfo = (props: Props) => {
  return (
    <UserInfoStyled>
      <Avatar size="xsm" />
      <div>
        <Typography className="name" size="title">
          Sachin Bhattarai
        </Typography>
        <Typography className="username" size="caption">
          @sachin_bhattarai
        </Typography>
      </div>
    </UserInfoStyled>
  );
};

export default UserInfo;
