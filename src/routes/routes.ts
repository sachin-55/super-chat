const wrapWithBasename = (route: string) => {
  const basename = process.env.REACT_APP_BASENAME;

  return basename ? `${basename}${route}` : route;
};

export const LANDING_ROUTE = wrapWithBasename("/");
export const LOGIN_ROUTE = wrapWithBasename("/get-in");
export const SIGNUP_ROUTE = wrapWithBasename("/start-using");
export const HOME_ROUTE = wrapWithBasename("/home");
export const DASHBOARD_ROUTE = wrapWithBasename("/dashboard");

export const NOT_FOUND_ROUTE = "*";
