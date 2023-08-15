import React from "react";
import { Outlet } from "react-router-dom";

type Props = {
  allowed?: string[];
  restrictTo?: string[];
  role?: string[];
};

const ProtectedRoute: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  allowed = [],
  restrictTo = [],
  role = [],
}) => {
  return (
    <>
      <div>Protected</div>
      {children ? children : <Outlet />}
    </>
  );
};

export default ProtectedRoute;
