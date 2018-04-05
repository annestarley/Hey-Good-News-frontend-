import React, { Component } from 'react';
import ArticleList from './ArticleList'

class TopNews extends React.Component {

  render() {
    return (
      <div className="top-news">
        <h1>Top News</h1>
        <ArticleList articles={this.props.articles}/>
      </div>
    )
  }
}

export default TopNews
