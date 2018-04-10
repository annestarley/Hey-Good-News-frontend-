import React, { Component } from 'react';
import {Input} from 'mdbreact'
import axios from 'axios'
import UserArticleCollapse from './UserArticleCollapse'

const backendURL = 'http://localhost:8000'

class UserArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      article: []
    }
  }

  getURL = (e) => {
    let url = e.target.value
    console.log(url)
    this.setState({
      url: url
    })
    console.log(this.state)
  }

  getTones = (e) => {
    if (e.key === 'Enter') {
      console.log('enter')
      axios.post(`${backendURL}/proxy`, {url: this.state.url})
        .then(res => {
          console.log(res);
          this.setState({
            article: res.data
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

  renderCollapse = () => {
    if (this.state.article.length) {
      return (
        <UserArticleCollapse article={this.state.article} url={this.state.url}/>
      )
    }
  }

  render () {
    return (
      <div className="user-article">
        <h3>Don't see the article you are interested in?</h3>
        <p>Enter the URL for your own article to see it's tone.</p>
        <Input type="text" placeholder="Your text..." onChange={this.getURL} onKeyPress={this.getTones}></Input>
        {this.renderCollapse()}
        <UserArticleCollapse />
      </div>
    )
  }
}

export default UserArticle
