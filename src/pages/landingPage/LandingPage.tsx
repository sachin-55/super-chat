import React from "react";
import { LandingPageStyled } from "./styles";
import { Button } from "../../components";
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
      <h2>Welcome to Super Chat</h2>
      <p>
        Dive into conversations with all your heart and share your thoughts and
        feelings with friends.
      </p>

      <p>Before starting your adventure, let's get ready for the journey!</p>

      <Button variant="outline" onClick={handleLogin}>
        Login
      </Button>
      <Button onClick={handleRegister}>Register</Button>
    </LandingPageStyled>
  );
};

export default LandingPage;
