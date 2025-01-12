import React from "react";
import { Outlet } from "react-router-dom";

const NoLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <>{children ? children : <Outlet />}</>;
};

export default NoLayout;
