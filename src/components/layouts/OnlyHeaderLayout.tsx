import React from "react";
import { Outlet } from "react-router-dom";

const OnlyHeaderLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div>Header</div>
      {children ? children : <Outlet />}
    </>
  );
};

export default OnlyHeaderLayout;
