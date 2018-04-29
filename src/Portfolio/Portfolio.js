import React, { Component } from 'react'
import Project from '../Project/Project'
import ProjectData from './ProjectData'
import './Portfolio.css'
class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Project data={ProjectData.project4} />
        <Project data={ProjectData.p5Paint} />
        <Project data={ProjectData.project2} />
        <Project data={ProjectData.project1} />
        <Project data={ProjectData.project3} />
      </div>
    )
  }
}

export default Portfolio
