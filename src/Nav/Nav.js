import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Clipboard from 'react-clipboard.js'
import './Nav.css'
import me from './me.jpg'
class Nav extends Component {
  constructor() {
    super()
    this.state = {
      open: true,
      navStyle: {
        display: 'flex'
      },
      navOpenerStyle: {
        left: '25%',
        tranform: 'none'
      }
    }
    this.handleNavOpen = this.handleNavOpen.bind(this)
  }

  handleNavOpen(e) {
    e.preventDefault()
    this.props.mainMove()
    if (!this.state.open) {
      this.setState({
        open: true,
        navStyle: {
          display: 'flex'
        },
        navOpenerStyle: {
          left: '25%',
          tranform: 'none'
        }
      })
    } else {
      this.setState({
        open: false,
        navStyle: {
          display: 'none'
        },
        navOpenerStyle: {
          left: '0',
          transform: 'rotate(180deg)'
        }
      })
    }
  }
  render() {
    return (
      <div>
        <div
          className="nav-opener"
          onClick={this.handleNavOpen}
          style={this.state.navOpenerStyle}
        >
          <i className="fas fa-angle-left" />
        </div>
        <nav style={this.state.navStyle}>
          <div className="nav-top">
            <img src={me} alt="my face" />
            <h1>BRANDON</h1>
            <h1>SEARS</h1>
            <h2>FULL STACK WEB DEVELOPER</h2>
          </div>
          <div className="nav-links">
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
          <div className="nav-contact">
            <Clipboard
              data-clipboard-text="brandonsears8@gmail.com"
              button-className="copy-button"
            >
              <p>
                <i className="fas fa-clipboard" /> COPY EMAIL
              </p>
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
              rel="noopener noreferrer"
            >
              <p>
                <i className="fab fa-github contactIcon" /> /BrandonS8
              </p>
            </a>
            <a
              className="contactLink"
              href="https://www.linkedin.com/in/brandon-sears/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <i className="fab fa-linkedin contactIcon" /> /brandon-sears
              </p>
            </a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
