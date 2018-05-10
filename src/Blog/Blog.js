import React, { Component } from 'react'
import BlogPost from '../BlogPost/BlogPost'
import './Blog.css'
import axios from 'axios'
class Blog extends Component {
  constructor() {
    super()
    this.state = {
      posts: {}
    }
  }

  componentDidMount() {
    axios
      .get(
        'https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@brandons8'
      )
      .then(res => {
        console.log(res.data.payload.references.Post)
        this.setState({
          posts: res.data.payload.references.Post
        })
      })
  }
  render() {
    let posts = []
    if (this.state.posts) {
      posts = Object.keys(this.state.posts).map((post, i) => {
        return (
          <BlogPost
            key={i}
            title={this.state.posts[post].title}
            url={`https://medium.com/@brandons8/${
              this.state.posts[post].uniqueSlug
            }`}
            paragraph={
              this.state.posts[post].previewContent.bodyModel.paragraphs[1].text
            }
            image={
              this.state.posts[post].virtuals.previewImage.imageId
                ? `https://cdn-images-1.medium.com/max/800/${
                    this.state.posts[post].virtuals.previewImage.imageId
                  }`
                : null
            }
          />
        )
      })
    }
    return (
      <div className="blog-container">
        <div className="posts-container">{posts}</div>
      </div>
    )
  }
}

export default Blog
