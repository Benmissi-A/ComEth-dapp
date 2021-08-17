import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Button} from "@chakra-ui/react";
import LandingPage from './components/pages/LandingPage';
import Create from "./components/pages/Create";
import Login from "./components/pages/Login";


const Dapp = () => {
    return (
      <>
        <LandingPage />

        <Link to="/"></Link>
        <Link to="/create">
          <Button colorScheme="blue">Create</Button>
        </Link>

        <Link to="/login">
          <Button colorScheme="blue">Login</Button>
        </Link>

        <Switch>
          <Route exact path="/" component={LandingPage}>
            <Create />
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