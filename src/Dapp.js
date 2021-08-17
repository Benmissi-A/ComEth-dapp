import React from 'react';
import { Switch, Route } from "react-router-dom";
import LandingPage from './components/pages/LandingPage';
import Create from "./components/pages/Create";
import Login from "./components/pages/Login";


const Dapp = () => {
    return (
      <>

        <Switch>
          <Route exact path="/" component={LandingPage}>
            <LandingPage />
          </Route>

          <Route exact path="/Create" component={Create}>
            <Create />
          </Route>

          <Route exact path="/Login" component={Login}>
            <Login />
          </Route>
        </Switch>
      </>
    );
};

export default Dapp;