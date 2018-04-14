import React, { Component } from 'react';
import {Input, Spinner} from 'mdbreact'
import axios from 'axios'
import UserArticleCollapse from './UserArticleCollapse'
// import LoadingAnimation from './LoadingAnimation'

const backendURL = 'http://localhost:8000'

class UserArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      article: {},
      loading: false
    }
  }

  getURL = (e) => {
    let url = e.target.value
    this.setState({
      url: url
    })
  }

  getTones = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        loading: true
      })
      axios.post(`${backendURL}/proxy`, {url: this.state.url})
        .then(res => {
          this.setState({
            article: res.data,
            loading: false
          })
        })
        .then(() => {
          this.renderCollapse()
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render () {
    return (
      <div className="user-article" id="dont-see-your-article">
        <h3>Don't see the article you are interested in?</h3>
        <p>Enter the URL for your own article to see it's tone.</p>
        <div className="article-input-div">
          <Input
            type="text"
            label="Enter your url"
            onChange={this.getURL}
            onKeyPress={this.getTones}
            className="article-input"
          ></Input>
        </div>
        {this.state.article.title  ? <UserArticleCollapse article={this.state.article}/> : null}
        {this.state.loading ? <img src="Loading3.gif"/> : null}
      </div>
    )
  }
}

export default UserArticle
