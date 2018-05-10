import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Nav from './Nav/Nav'
import Portfolio from './Portfolio/Portfolio'
import Home from './Home/Home'
import About from './About/About'
import Blog from './Blog/Blog'

class App extends Component {
  constructor() {
    super()
    this.state = {
      mainStyle: {
        width: '70.5%'
      },
      windowW: 0,
      windowH: 0
    }
    this.updateWindowSize = this.updateWindowSize.bind(this)
    this.mainMove = this.mainMove.bind(this)
  }
  // https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
  componentWillMount() {
    this.updateWindowSize()
    window.addEventListener('resize', this.updateWindowSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize)
  }

  updateWindowSize() {
    this.setState({ windowW: window.innerWidth, windowH: window.innerHeight })
  }

  mainMove() {
    if (this.state.mainStyle.width === '100%') {
      this.setState({
        mainStyle: {
          width: '70.5%'
        }
      })
    } else {
      this.setState({
        mainStyle: {
          width: '100%'
        }
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Nav mainMove={this.mainMove} windowW={this.state.windowW} />
        <main style={this.state.mainStyle}>
          <Switch>
            <Route path="/about" render={() => <About />} />
            <Route path="/portfolio" render={() => <Portfolio />} />
            <Route path="/blog" render={() => <Blog />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
