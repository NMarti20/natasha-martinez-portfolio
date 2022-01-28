import React, { Component } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./MenuItems";
import "./_header.scss";

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="header">
        <h1 className="header__logo">
          Natasha <i className="fas fa-laptop-code"></i>
        </h1>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul
          className={
            this.state.clicked
              ? "header-menu header-menu--active"
              : "header-menu"
          }
        >
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className="header-menu__links" href={item.link}>
                  {item.section}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Header;
