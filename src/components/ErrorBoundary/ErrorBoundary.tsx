import React from "react";
import { useRouteError } from "react-router-dom";
import { styled } from "styled-components";
import { Header } from "../Header";

type Props = {};

const ErrorBoundary = (props: Props) => {
  const error = useRouteError() as { message: string };

  return (
    <ErrorBoundaryStyled>
      <h4>Error Occured :</h4>
      <caption>{error?.message}</caption>
    </ErrorBoundaryStyled>
  );
};

export default ErrorBoundary;

const ErrorBoundaryStyled = styled.div`
  background: ${({ theme }) => theme?.main.soft[90].danger};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
