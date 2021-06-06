import { memo, VFC } from "react";
import { Login } from "../components/pages/Login";
import { Route, Switch } from "react-router-dom";
import { homeRoutes } from "./HomeRoutes";
export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home" render={() => <Switch>{HomeRoutes}</Switch>} />
    </Switch>
  );
});
