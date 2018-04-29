import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Clipboard from 'react-clipboard.js'
import './Nav.css'
import me from './me.jpg'
class Nav extends Component {
  render() {
    return (
      <nav>
        <div class="nav-top">
          <img src={me} alt="my face" />
          <h1>BRANDON</h1>
          <h1>SEARS</h1>
          <h2>FULL STACK WEB DEVELOPER</h2>
        </div>
        <div class="nav-links">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
          <NavLink exact to="/portfolio" activeClassName="nav-link-active">
            Portfolio
          </NavLink>
          <NavLink exact to="/about" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>
        <div class="nav-contact">
          <Clipboard
            data-clipboard-text="brandonsears8@gmail.com"
            button-class="copy-button"
          >
            <i class="fas fa-clipboard" /> COPY EMAIL
          </Clipboard>
          <a className="contactLink" href="mailto:brandonsears8@gmail.com">
            <p>
              <i className="fas fa-envelope contactIcon" />{' '}
              brandonsears8@gmail.com
            </p>
          </a>
          <a
            className="contactLink"
            href="https://github.com/BrandonS8"
            target="_blank"
          >
            <p>
              <i className="fab fa-github contactIcon" /> /BrandonS8
            </p>
          </a>
          <a
            className="contactLink"
            href="https://www.linkedin.com/in/brandon-sears/"
            target="_blank"
          >
            <p>
              <i className="fab fa-linkedin contactIcon" /> /brandon-sears
            </p>
          </a>
        </div>
      </nav>
    )
  }
}

export default Nav
