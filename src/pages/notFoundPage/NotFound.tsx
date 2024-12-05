import React from "react";
import { Flex, Typography } from "../../components";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      style={{ height: "100vh" }}
    >
      <Typography color="main.danger" size="xlHeading" fontWeight="black">
        Not Found
      </Typography>
      <Typography size="lHeading" fontFamily="roboto" color="main.hard.caution">
        {pathname}
      </Typography>
      <Typography size="title" color="main.success">
        This can be frustrating to not be able to get the right path.
      </Typography>
    </Flex>
  );
};

export default NotFound;
