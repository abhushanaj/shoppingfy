import React from "react";
import { Link } from "react-router-dom";

import logo from "../../asset/logo.svg";
import list from "../../asset/lists.svg";
import arrow from "../../asset/arrow.svg";
import chart from "../../asset/chart.svg";
import cart from "../../asset/cart.svg";

import "./sidebar.styles.scss";

const SideNavigation = () => {
  return (
    <nav className="sidebar">
      <Link to="/">
        <div className="logo-box">
          <img src={logo} alt="Shoppingfy logo." />
        </div>
      </Link>
      <ul className="sidebar__items">
        <li className="sidebar__item">
          <Link to="/">
            <img src={list} alt="List." />
          </Link>
          <span className="tooltip">Shopping-Items</span>
        </li>
        <li className="sidebar__item">
          <Link to="/history">
            <img src={arrow} alt="List." />
          </Link>
          <span className="tooltip tooltip--1">History</span>
        </li>
        <li className="sidebar__item">
          <Link to="/statistics">
            <img src={chart} alt="List." />
          </Link>
          <span className="tooltip tooltip--1">Statistics</span>
        </li>
      </ul>
      <div className="cart-box">
        <img src={cart} alt="Cart." />
        <span className="cart-count">10</span>
      </div>
    </nav>
  );
};

export default SideNavigation;
