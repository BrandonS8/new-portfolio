import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Clipboard from 'react-clipboard.js'
import './Nav.css'
import me from './me.jpg'
class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      copyText: 'COPY EMAIL',
      copyTextStyle: {
        color: '#fff'
      },
      open: true,
      navStyle: {
        display: 'flex'
      },
      navOpenerStyle: {
        left: '27.5%',
        tranform: 'none'
      }
    }
    this.handleNavOpen = this.handleNavOpen.bind(this)
    this.sayCopied = this.sayCopied.bind(this)
    this.hoverColor = this.hoverColor.bind(this)
  }
  componentDidMount() {
    if (this.props.windowW <= 1000 && this.props.windowW !== 0) {
      this.setState({
        navStyle: {
          width: '100%'
        },
        navOpenerStyle: {
          left: '0'
        }
      })
    }
  }

  hoverColor() {
    if (this.state.copyTextStyle.color === '#fff') {
      this.setState({
        copyTextStyle: {
          color: '#141519'
        }
      })
    } else if (this.state.copyTextStyle.color === '#141519') {
      this.setState({
        copyTextStyle: {
          color: '#fff'
        }
      })
    }
  }

  sayCopied(e) {
    this.setState({
      copyText: 'COPIED!',
      copyTextStyle: {
        color: 'lightgreen'
      }
    })
    setTimeout(() => {
      this.setState({
        copyText: 'COPY EMAIL',
        copyTextStyle: {
          color: '#fff'
        }
      })
    }, 2000)
  }

  handleNavOpen() {
    this.props.mainMove()
    if (!this.state.open) {
      if (this.props.windowW <= 1000) {
        this.setState({
          open: true,
          navStyle: {
            display: 'flex',
            width: '100%'
          },
          navOpenerStyle: {
            left: '0',
            tranform: 'none'
          }
        })
      } else {
        this.setState({
          open: true,
          navStyle: {
            display: 'flex'
          },
          navOpenerStyle: {
            left: '27.5%',
            tranform: 'none'
          }
        })
      }
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
            <NavLink
              exact
              to="/"
              activeClassName="nav-link-active"
              onClick={this.handleNavOpen}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/portfolio"
              activeClassName="nav-link-active"
              onClick={this.handleNavOpen}
            >
              Portfolio
            </NavLink>
            <NavLink
              exact
              to="/about"
              activeClassName="nav-link-active"
              onClick={this.handleNavOpen}
            >
              About
            </NavLink>
          </div>
          <div className="nav-contact">
            <Clipboard
              data-clipboard-text="brandonsears8@gmail.com"
              button-className="copy-button"
            >
              <p
                onClick={this.sayCopied}
                onMouseEnter={this.hoverColor}
                onMouseLeave={this.hoverColor}
                style={this.state.copyTextStyle}
                className="copy-email"
              >
                <i className="fas fa-clipboard" /> {this.state.copyText}
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
