import { Button, Card, Flex, Input, Typography } from "../../components";
import { RegisterPageStyled } from "./styles";

const RegisterPage = () => {
  return (
    <RegisterPageStyled>
      <Typography size="heading" fontWeight="bold">
        Welcome to Super Chat
      </Typography>
      <Typography className="desc" size="lTitle" margin="0px 0px 20px ">
        Do you have anything to share to your friends and looking for a platform
        here I'm here. Stop searching let's join together and chit-chat there.
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
          <Input
            placeholder="Create secret password to enter."
            type="password"
          />
          <Input placeholder="Re-enter password." type="password" />
          <Button variant="outline">Join the Gossips</Button>
        </Flex>
      </Card>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
