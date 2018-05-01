import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Nav from './Nav/Nav'
import Portfolio from './Portfolio/Portfolio'
import Home from './Home/Home'
import About from './About/About'

class App extends Component {
  constructor() {
    super()
    this.state = {
      width: '76%'
    }
    this.mainMove = this.mainMove.bind(this)
  }
  mainMove() {
    if (this.state.width === '100%') {
      this.setState({
        width: '76%'
      })
    } else {
      this.setState({
        width: '100%'
      })
    }
  }
  render() {
    return (
      <div className="app">
        <Nav mainMove={this.mainMove} />
        <main style={this.state}>
          <Switch>
            {/* <Route path="/contact" render={() => <Contact />} />*/}
            <Route path="/about" render={() => <About />} />
            <Route path="/portfolio" render={() => <Portfolio />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
