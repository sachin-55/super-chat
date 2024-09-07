import { MainLayout, OnlyHeaderLayout } from "../components/layouts";
import {
  HomePage,
  LandingPage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
} from "../pages";
import {
  DASHBOARD_ROUTE,
  HOME_ROUTE,
  LANDING_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  SIGNUP_ROUTE,
} from "./routes";

const routes: IRoutes[] = [
  {
    id: 100,
    path: LANDING_ROUTE,
    component: LandingPage,
    layout: OnlyHeaderLayout,
    isProtected: false,
    icon: "landing",
    name: "Landing",
    onSidebar: false,
    sidebarOrder: null,
    role: [],
    restrictTo: [],
    allowTo: [],
    children: [],
  },
  {
    id: 200,
    path: HOME_ROUTE,
    component: HomePage,
    layout: OnlyHeaderLayout,
    isProtected: true,
    icon: "home",
    name: "Home",
    onSidebar: true,
    sidebarOrder: 1,
  },
  {
    id: 300,
    path: LOGIN_ROUTE,
    component: LoginPage,
    layout: OnlyHeaderLayout,
    isProtected: false,
    icon: "login",
    name: "Log In",
    onSidebar: false,
    sidebarOrder: null,
  },
  {
    id: 400,
    path: SIGNUP_ROUTE,
    component: RegisterPage,
    layout: OnlyHeaderLayout,
    isProtected: false,
    icon: "signup",
    name: "Sign Up",
    onSidebar: false,
    sidebarOrder: null,
  },
  {
    id: 500,
    path: DASHBOARD_ROUTE,
    component: LandingPage,
    layout: MainLayout,
    isProtected: true,
    icon: "dashboard",
    name: "Dashboard",
    onSidebar: true,
    sidebarOrder: 2,
  },
  {
    id: 999999_99999,
    path: NOT_FOUND_ROUTE,
    component: NotFoundPage,
    layout: OnlyHeaderLayout,
    isProtected: false,
    icon: "notFound",
    name: "Not Found",
    onSidebar: false,
    sidebarOrder: null,
  },
];
export default routes;

export interface IRoutes {
  id: number;
  path: string;
  component: React.FC;
  layout: React.FC<React.PropsWithChildren>;
  isProtected?: boolean;
  icon?: React.ReactNode;
  name: string;
  onSidebar?: boolean;
  sidebarOrder?: number | null;
  role?: string[];
  restrictTo?: string[];
  allowTo?: string[];
  children?: Array<IChildren>;
}

export interface IChildren {
  id: number;
  path: string;
  component: React.FC;
  name: string;
  children?: Array<IChildren>;
}
