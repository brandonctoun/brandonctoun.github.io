import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navitem extends Component {

  handleClick = () => {
    this.props.activec(this.props.item);
  }

  getActiveNavItem = (route) => {
    const routes = {
      '/': "Home",
      '/about': "About",
      '/experience': 'Experience',
      '/skills': 'Skills',
      '/contact': 'Contact'
    }
    return routes[route];
  }

  isActive = () => {
    if (this.props.item === this.getActiveNavItem(this.props.currentRoute)) {
      return true;
    }
  }

  render() {
    return (
      <li id={this.props.item} className={isActive() ? 'active' : null}>
        <Link to={this.props.tolink} disabled={this.isActive()}>{this.props.item}</Link>
      </li>
    )
  }
}
export default Navitem