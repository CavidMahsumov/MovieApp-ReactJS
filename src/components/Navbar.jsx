import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo5.jpg";
import tmdb from "../images/tmdb.svg";
import  mainlogo  from "../images/logocin.png";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={mainlogo} alt=""></img>
      <h1 className="title">
        <Link to="/">DjavidCin</Link>
      </h1>
    </nav>
  );
};

export default Navbar;
