// Main Component
import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import ListContent from "./section/ListContent";
import "./mainComponent.css";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";

const MainComponent = () => {
  const [pathparams, setpathparams] = useState("");
  const setPathname = (pathname) => {
    if (!pathname == "") {
      setpathparams(pathname);
      // console.log(pathname);
    }
  };

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Sidebar setPathname={setPathname} />
            <ListContent year={null} />
          </Route>

          <Route path="/:launch_year" onChange={setPathname()}>
            <Sidebar setPathname={setPathname} />
            <ListContent routes={pathparams} />
          </Route>
        </Switch>
        <Redirect to="/" />
      </BrowserRouter>
    </div>
  );
};
export default MainComponent;
