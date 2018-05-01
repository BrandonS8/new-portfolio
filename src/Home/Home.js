import React, { Component } from 'react'
import './Home.css'
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-name-container">
          <h1 className="home-name">Hello, I'm Brandon.</h1>
        </div>
        <div className="home-statement">
          <h2>
            I'm a
            <span className="statement-title">full stack web developer</span>
            that loves
            <span className="statement-creativity"> creativity</span> and{' '}
            <span className="statement-happy">
              happy <span className="statement-users">users</span>
            </span>
            :)
          </h2>
        </div>
      </div>
    )
  }
}

export default Home
