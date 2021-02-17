import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import DataPrepProject from "./components/pages/DataPrepProject";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/DataPrep" component={DataPrepProject} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
