import { Button, Card, Flex, Input, Typography } from "../../components";
import { HOME_ROUTE, LOGIN_ROUTE } from "../../routes/routes";
import { RegisterPageStyled } from "./styles";
import { LinkStyled } from "../../style/reusableStyle";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate(HOME_ROUTE);
  };

  return (
    <RegisterPageStyled>
      <Typography size="heading" fontWeight="bold">
        Welcome to Super Chat
      </Typography>
      <Typography className="desc" size="lTitle" margin="0px 0px 20px ">
        Have something to share with your friends? Looking for the perfect
        platform to connect and chat? Look no further — join us now and start
        the conversation!
      </Typography>
      <Card>
        <Typography size="lHeading" fontWeight="medium">
          Let's get started & chit-chat...
        </Typography>
        <Flex
          direction="column"
          margin="16px 0px"
          gap="12px"
          alignItems="center"
        >
          <Input placeholder="What's your name?" />
          <Input placeholder="Enter your email." />
          <Input placeholder="Choose username for public." />
          <Input placeholder="Create your secret password." type="password" />
          <Input placeholder="Re-enter password." type="password" />
          <Button variant="outline" onClick={handleRegister}>
            Join the Gossips
          </Button>
        </Flex>
        <Flex justifyContent="center">
          <Typography size="lTitle">
            I've join already. <LinkStyled to={LOGIN_ROUTE}>Get In</LinkStyled>
          </Typography>
        </Flex>
      </Card>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
