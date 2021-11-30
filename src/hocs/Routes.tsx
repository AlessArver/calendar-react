import React from "react";
import {
  Route,
  PathMatch,
  Routes as Switch,
  RouteProps,
} from "react-router-dom";
import { Location } from "history";

export interface RouteType extends RouteProps {
  layout?: React.FC;
}

export interface RoutesCompProps {
  location?: Location;
  match?: PathMatch;
}

export const Routes = (routes: RouteType[]) => () =>
  (
    <Switch>
      {routes.map((props, i) => {
        const element = props.layout ? (
          <props.layout>{props.element}</props.layout>
        ) : (
          props.element
        );

        return <Route key={props.path} {...props} element={element} />;
      })}
    </Switch>
  );
