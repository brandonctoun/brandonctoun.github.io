import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Navitem = (props) => {

  const getActiveNavItem = (route) => {
    const routes = {
      '/': "Home",
      '/about': "About",
      '/experience': 'Experience',
      '/skills': 'Skills',
      '/contact': 'Contact'
    }
    return routes[route];
  }

  const isActive = () => {
    if (props.item === getActiveNavItem(props.currentRoute)) {
      return true;
    }
  }

    return (
      <li id={props.item} className={isActive() ? 'active' : null}>
        <Link to={props.tolink} disabled={isActive()}>{props.item}</Link>
      </li>
    )
}
export default Navitem