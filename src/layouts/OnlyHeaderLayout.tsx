import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

const OnlyHeaderLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children ? children : <Outlet />}
    </>
  );
};

export default OnlyHeaderLayout;
