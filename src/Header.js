import React from "react";
import logo from "./images/logo.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <img className="nav-logo" src={logo} />
        <h1 className="nav-title">my travel journal.</h1>
      </nav>
    </header>
  );
}
