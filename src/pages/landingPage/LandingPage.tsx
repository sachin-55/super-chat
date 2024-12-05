import React from "react";
import { LandingPageStyled } from "./styles";
import { Button, MouseTrackerRain, Typography } from "../../components";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../../routes/routes";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate(SIGNUP_ROUTE);
  };
  const handleLogin = () => {
    navigate(LOGIN_ROUTE);
  };

  return (
    <LandingPageStyled>
      <Typography color="light.white" size="xlHeading" fontWeight="extrabold">
        Welcome to Super Chat
      </Typography>
      <Typography color="light.whiteSmoke" fontWeight="medium" size="lTitle">
        Dive into conversations with all your heart and share your thoughts and
        feelings with friends.
      </Typography>

      <Typography color="light.whiteSmoke" fontWeight="medium" size="lTitle">
        Before starting your adventure, let's get ready for the journey!
      </Typography>

      <Button variant="outline" onClick={handleLogin}>
        Login
      </Button>
      <Button onClick={handleRegister}>Register</Button>
      <MouseTrackerRain />
    </LandingPageStyled>
  );
};

export default LandingPage;
