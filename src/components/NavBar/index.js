import React, { Component } from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom'


class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/students">Students</a></li>
          <li><a href="/courses">Courses</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
