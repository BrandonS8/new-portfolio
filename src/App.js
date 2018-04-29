import React, { Component } from 'react'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Nav from './Nav/Nav'
import Portfolio from './Portfolio/Portfolio'
import Home from './Home/Home'
import About from './About/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main>
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
