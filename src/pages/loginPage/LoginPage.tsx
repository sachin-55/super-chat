import React from "react";
import { Card, Input } from "../../components";
import { styled } from "styled-components";
import FormWrapper from "../../components/Form/FormWrapper";
import FormLabel from "../../components/Form/FormLabel";
import FormError from "../../components/Form/FormError";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <Card className="login-container">
        <h1>Login</h1>
        <FormWrapper direction="row" hasError>
          <FormLabel label="Email" />
          <Input placeholder="Email" />
          <FormError error="smlclxnc" />
        </FormWrapper>
      </Card>
    </LoginPageStyled>
  );
};

export default LoginPage;

const LoginPageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: center;
  min-height: calc(100vh - 60px);

  & .login-container {
    width: 600px;
  }
`;
