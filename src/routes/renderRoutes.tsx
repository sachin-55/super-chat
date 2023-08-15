import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { routesObjects } from ".";

import { MainLayout, OnlyHeaderLayout } from "../components/layouts";
import { NotFoundPage } from "../pages";

const renderNestedRoutes = (route: any) => {
  if ("children" in route && Array.isArray(route.children)) {
    return route.children.map((child: any) => ({
      path: child.path,
      element: <child.component />,
      children: renderNestedRoutes(child),
    }));
  } else {
    return null;
  }
};
const router = createBrowserRouter(
  routesObjects.map((route) => {
    return {
      path: route?.path,
      element: route.isProtected ? (
        <ProtectedRoute
          allowed={route?.allowTo || []}
          restrictTo={route?.restrictTo || []}
          role={route?.role || []}
        >
          <route.layout />
        </ProtectedRoute>
      ) : (
        <route.layout />
      ),
      children: [
        {
          index: true,
          element: <route.component />,
        },
        {
          path: "",
          children: renderNestedRoutes(route),
        },
      ],
    };
  })
);

export default router;
