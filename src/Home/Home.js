import React, { Component } from 'react'
import './Home.css'
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-statement">
          <h2>I'm a</h2>
          <h2 className="statement-title">full stack web developer</h2>
          <h2>that loves</h2>
          <span className="statement-creativity">creativity</span> <h2>and</h2>{' '}
          <span className="statement-happy">
            happy <span className="statement-users">users</span>
          </span>{' '}
          :)
        </div>
      </div>
    )
  }
}

export default Home
