import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          //この中で"/home"配下のルーティングを設定していく
          <Switch>
            　　　　
            {homeRoutes.map((route) => (
              //routesのパスをmapのkeyに設定
              <Route
                key={route.path}
                exact={route.exact}
                //"/home配下にパスを設定していく"
                path={`&{url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
});
