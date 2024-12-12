import { styled } from "styled-components";
import {
  BoxCollision,
  Button,
  Card,
  Flex,
  Input,
  Typography,
} from "../../components";
import { HOME_ROUTE, SIGNUP_ROUTE } from "../../routes/routes";
import { flexCenter, LinkStyled } from "../../style/reusableStyle";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(HOME_ROUTE);
  };
  return (
    <LoginPageStyled>
      <Typography size="heading" fontWeight="bold" color="light.light">
        Welcome to Super Chat
      </Typography>
      <Typography
        className="desc"
        size="lTitle"
        margin="0px 0px 20px "
        color="light.light"
      >
        Looking to make new friends and chat? Join us and connect with others
        who are ready to share, chat, and have fun! Don't keep searching — come
        join the conversation now!
      </Typography>
      <Card>
        <Typography size="lHeading" fontWeight="medium" color="light.light">
          Let's begin to chit-chat...
        </Typography>
        <Flex
          direction="column"
          margin="16px 0px"
          gap="12px"
          alignItems="center"
        >
          <Input placeholder="Enter your email/username." />
          <Input placeholder="Create your secret password." type="password" />
          <Button variant="outline" onClick={handleLogin}>
            Get In
          </Button>
        </Flex>
        <Flex justifyContent="center">
          <Typography size="lTitle" color="main.hard.warning">
            I've not join yet.{" "}
            <LinkStyled to={SIGNUP_ROUTE}>Join the Gossips</LinkStyled>
          </Typography>
        </Flex>
      </Card>
      <BoxCollision />
    </LoginPageStyled>
  );
};

export default LoginPage;

const LoginPageStyled = styled.div`
  ${flexCenter()};
  flex-direction: column;
  margin: 0 auto;
  min-height: calc(100vh - 40px);
  position: relative;
  & .desc {
    text-align: center;
    max-width: 700px;
  }
`;
