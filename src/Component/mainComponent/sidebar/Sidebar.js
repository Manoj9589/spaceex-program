import React, { useState, useEffect, useLocation } from "react";
import "./sidebar.css";
import { useHistory, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
const Sidebar = (props) => {
  const launchYear = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
  const history = useHistory();

  const handleClick = (year) => {
    history.push("/" + year);
    props.setPathname("&launch_year=" + year);
  };
  const handleSuccessfulLaunch = (bool) => {
    history.push("/Succesful_launch=" + bool);
    props.setPathname("&launch_success=" + bool);
  };
  const handleSuccessfulLiang = (bool) => {
    history.push("/Succesful_liang=" + bool);
    props.setPathname("&launch_success=" + bool);
  };
  const booleanFilters = ["True", "False"];
  const filterBtnItems = launchYear.map((year, index) => (
    <NavLink activeClassName="Nav-active" key={index} exact to={"/" + year}>
      <button
        type="button"
        onClick={() => handleClick(year)}
        className="btn-primary"
      >
        {year}
      </button>
    </NavLink>
  ));
  const successfulLaunch = booleanFilters.map((bool, index) => (
    <NavLink
      activeClassName="Nav-active"
      key={index}
      exact
      to={"/Succesful_launch=" + bool}
    >
      <button
        type="button"
        onClick={() => handleSuccessfulLaunch(bool)}
        className="btn-primary"
      >
        {bool}
      </button>
    </NavLink>
  ));
  const successfulLaing = booleanFilters.map((bool, index) => (
    <NavLink
      activeClassName="Nav-active"
      key={index}
      exact
      to={"/Succesful_liang=" + bool}
    >
      <button
        type="button"
        onClick={() => handleSuccessfulLiang(bool)}
        className="btn-primary"
      >
        {bool}
      </button>
    </NavLink>
  ));
  return (
    <aside>
      <h3>Filters</h3>
      <div className="launch-year-filter">
        <h5>Launch year</h5>
        <div className="filterBtns">{filterBtnItems}</div>
      </div>
      <div className="launch-year-filter">
        <h5>Successful Launch</h5>
        <div className="filterBtns">{successfulLaunch}</div>
      </div>
      <div className="launch-year-filter">
        <h5>Successful Landing</h5>
        <div className="filterBtns">{successfulLaing}</div>
      </div>
    </aside>
  );
};
export default withRouter(Sidebar);
