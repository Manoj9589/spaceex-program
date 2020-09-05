//Header
import React from "react";
import "./header.css";
import { Link, BrowserRouter } from "react-router-dom";

const Header = () => {
  return (
    <BrowserRouter>
      <Link to="/">
        <h1 className="heading">SpaceEx Launch Program</h1>
      </Link>
    </BrowserRouter>
  );
};
export default Header;
