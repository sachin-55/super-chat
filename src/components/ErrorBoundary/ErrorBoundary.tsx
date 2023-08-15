import React from "react";
import { useRouteError } from "react-router-dom";

type Props = {};

const ErrorBoundary = (props: Props) => {
  const error = useRouteError() as { message: string };

  return (
    <div>
      <p>Error Occured</p>
      <h1>{error?.message}</h1>
    </div>
  );
};

export default ErrorBoundary;
