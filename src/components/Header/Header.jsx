import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div className="header pt-2">
      <div className="header-elem mx-auto">
        <img src={logo} alt="logo" />
        <div>
          <button className="secondary-btn btn mx-2">Sign In</button>
          <button className="primary-btn btn ml-2">Dukaan for PC</button>
        </div>
      </div>
    </div>
  );
};
