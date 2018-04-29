import React, { Component } from 'react'
import './Project.css'
class Project extends Component {
  render() {
    return (
      <div className="projectContainer">
        <h1 className="projectHeading">{this.props.data.name}</h1>
        <img
          src={this.props.data.img}
          alt={`preview of {this.props.data.name}`}
          className="projectImg"
        />
        <p className="projectDesc">{this.props.data.description}</p>
        <div className="projectTechnologies">
          {this.props.data.technologies.map((item, i) => {
            return (
              <p
                className="projectTech"
                style={{
                  border: `2px solid ${item.color}`,
                  color: `${item.color}`
                }}
                key={i}
              >
                {item.name}
              </p>
            )
          })}
        </div>
        <div className="projectButtons">
          <a
            href={this.props.data.deployed}
            className="projectButton"
            target="_blank"
          >
            Deployed
          </a>
          <a
            href={this.props.data.code}
            className="projectButton"
            target="_blank"
          >
            Code
          </a>
        </div>
      </div>
    )
  }
}

export default Project
