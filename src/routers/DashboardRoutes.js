import React from "react";
import { NavBar } from "../components/ui/NavBar";
import { Redirect, Route, Switch } from "react-router-dom";

import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/heroe/:id" component={HeroScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
