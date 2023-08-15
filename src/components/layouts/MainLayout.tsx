import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div>Header</div>
      <div>
        <div>SideBar</div>
        {children ? children : <Outlet />}
      </div>
    </>
  );
};

export default MainLayout;
