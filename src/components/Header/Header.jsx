import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div className="header pt-3">
      <div className="header-elem mx-auto max-app-width">
        <img src={logo} alt="logo" />
        <div>
          <button className="btn link mx-2">Sign In</button>
          <button className="btn secondary-btn  ml-2">Dukaan for PC</button>
        </div>
      </div>
    </div>
  );
};
