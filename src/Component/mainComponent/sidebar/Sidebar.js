import React, { useState } from "react";
import "./sidebar.css";
import { useHistory, Link, useLocation } from "react-router-dom";
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
  const [filterParams, setfilterParams] = useState({
    launch_year: "",
    launch_success: "",
    land_success: "",
  });
  const [isActive, setIsActive] = useState({
    activeYearBtnId: "",
    activeLaunchSuccessBtnId: "",
    activeLandSuccessBtnId: "",
  });

  const booleanFilters = ["true", "false"];
  const history = useHistory();
  let locationPath = window.location.href;
  // on click launch year filter
  let location = useLocation();
  const handleClick = (year) => {
    let r = /\d+/;
    if (isActive.activeYearBtnId == "launch_year_" + year) {
      setIsActive({ ...isActive, activeYearBtnId: "" });
    } else {
      setIsActive({ ...isActive, activeYearBtnId: "launch_year_" + year });
    }
    let fUrl = "http://spaceex-app.herokuapp.com";
    let newUrl = locationPath.split(fUrl);
    console.log(newUrl[1]);
    let matches = locationPath.match(/[a-z\d]+=[a-z\d]+/gi);
    let count = matches ? matches.length : 0;
    if (newUrl[1].indexOf("/Search") > -1) {
      if (newUrl[1].indexOf("launch_year") > -1) {
        if (newUrl[1].match(r) == year) {
          newUrl[1].charAt(newUrl[1].lastIndexOf("launch_year") - 1) == "&"
            ? history.push(
                newUrl[1].replace(
                  "&launch_year=" + filterParams.launch_year,
                  ""
                )
              )
            : count > 1
            ? history.push(
                newUrl[1].replace(
                  "/Search?launch_year=" + filterParams.launch_year + "&",
                  "/Search?"
                )
              )
            : history.push(
                newUrl[1].replace(
                  "/Search?launch_year=" + filterParams.launch_year,
                  ""
                )
              );
        } else {
          history.push(newUrl[1].replace(filterParams.launch_year, year));
        }
      } else {
        history.push(newUrl[1] + "&launch_year=" + year);
      }
    } else {
      history.push("/Search?launch_year=" + year);
    }
    let apiParam = window.location.href.split("/Search?");
    console.log(apiParam[1]);
    props.setPathname(apiParam[1]);
    setfilterParams({ ...filterParams, launch_year: year });
  };
  // on click launch success filter
  const handleSuccessfulLaunch = (bool) => {
    let fUrl = "http://spaceex-app.herokuapp.com";
    let url = new URL(locationPath);
    let r = /\d+/;
    let matches = locationPath.match(/[a-z\d]+=[a-z\d]+/gi);
    let count = matches ? matches.length : 0;
    console.log(url);
    if (isActive.activeLaunchSuccessBtnId == "launch_success_" + bool) {
      setIsActive({ ...isActive, activeLaunchSuccessBtnId: "" });
    } else {
      setIsActive({
        ...isActive,
        activeLaunchSuccessBtnId: "launch_success_" + bool,
      });
    }
    let newUrl = locationPath.split(fUrl);
    if (newUrl[1].indexOf("/Search") > -1) {
      if (newUrl[1].indexOf("launch_success") > -1) {
        if (filterParams.launch_success == bool) {
          newUrl[1].charAt(newUrl[1].lastIndexOf("launch_success") - 1) == "&"
            ? history.push(
                newUrl[1].replace(
                  "&launch_success=" + filterParams.launch_success,
                  ""
                )
              )
            : count > 1
            ? history.push(
                newUrl[1].replace(
                  "/Search?launch_success=" + filterParams.launch_success + "&",
                  "/Search?"
                )
              )
            : history.push(
                newUrl[1].replace(
                  "/Search?launch_success=" + filterParams.launch_success,
                  ""
                )
              );
        } else {
          history.push(newUrl[1].replace(filterParams.launch_success, bool));
        }
      } else {
        history.push(newUrl[1] + "&launch_success=" + bool);
      }
    } else {
      history.push("/Search?launch_success=" + bool);
    }
    let apiParam = window.location.href.split("/Search?");
    console.log(apiParam[1]);
    props.setPathname(apiParam[1]);
    setfilterParams({ ...filterParams, launch_success: bool });
  };
  // on click land success filter
  const handleSuccessfulLanding = (bool) => {
    if (isActive.activeLandSuccessBtnId == "land_success_" + bool) {
      setIsActive({ ...isActive, activeLandSuccessBtnId: "" });
    } else {
      setIsActive({
        ...isActive,
        activeLandSuccessBtnId: "land_success_" + bool,
      });
    }
    console.log(isActive);
    let fUrl = "http://spaceex-app.herokuapp.com";
    let newUrl = locationPath.split(fUrl);
    let url = new URL(locationPath);
    let r = /\d+/;
    let matches = locationPath.match(/[a-z\d]+=[a-z\d]+/gi);
    let count = matches ? matches.length : 0;
    if (newUrl[1].indexOf("/Search") > -1) {
      if (newUrl[1].indexOf("land_success") > -1) {
        if (filterParams.land_success == bool) {
          newUrl[1].charAt(newUrl[1].lastIndexOf("land_success") - 1) == "&"
            ? history.push(
                newUrl[1].replace(
                  "&land_success=" + filterParams.land_success,
                  ""
                )
              )
            : count > 1
            ? history.push(
                newUrl[1].replace(
                  "/Search?land_success=" + filterParams.land_success + "&",
                  "/Search?"
                )
              )
            : history.push(
                newUrl[1].replace(
                  "/Search?land_success=" + filterParams.land_success,
                  ""
                )
              );
        } else {
          history.push(newUrl[1].replace(filterParams.land_success, bool));
        }
      } else {
        history.push(newUrl[1] + "&land_success=" + bool);
      }
    } else {
      history.push("/Search?land_success=" + bool);
    }

    let apiParam = window.location.href.split("/Search?");
    console.log(apiParam[1]);
    props.setPathname(apiParam[1]);
    setfilterParams({ ...filterParams, land_success: bool });
  };

  const filterBtnItems = launchYear.map((year, index) => (
    <button
      key={index}
      id={`launch_year_${year}`}
      type="button"
      onClick={() => handleClick(year)}
      className={
        isActive.activeYearBtnId == "launch_year_" + year
          ? "active btn btn-primary"
          : "btn btn-primary"
      }
    >
      {year}
    </button>
  ));
  const successfulLaunch = booleanFilters.map((bool, index) => (
    <button
      id={`launch_success_${bool}`}
      key={index}
      type="button"
      onClick={() => handleSuccessfulLaunch(bool)}
      className={
        isActive.activeLaunchSuccessBtnId == "launch_success_" + bool
          ? "active btn btn-primary"
          : "btn btn-primary"
      }
    >
      {bool}
    </button>
  ));
  const successfulLaing = booleanFilters.map((bool, index) => (
    <button
      key={index}
      id={`land_success_${bool}`}
      type="button"
      onClick={() => handleSuccessfulLanding(bool)}
      className={
        isActive.activeLandSuccessBtnId == "land_success_" + bool
          ? "active btn btn-primary"
          : "btn btn-primary"
      }
    >
      {bool}
    </button>
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
