import React, { Component } from 'react'
import './BlogPost.css'
class BlogPost extends Component {
  render() {
    return (
      <div className="blog-post">
        <a href={this.props.url}>Read More</a>
        <div className="blog-post-content">
          <h1>{this.props.title}</h1>
          <p>{this.props.paragraph}</p>
        </div>
        <div
          className="blog-post-image"
          style={{
            background: `${
              this.props.image ? `url(${this.props.image})` : 'none'
            }`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
    )
  }
}

export default BlogPost
