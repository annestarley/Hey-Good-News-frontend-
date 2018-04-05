import React, { Component } from 'react';
import ArticleList from './ArticleList'

import TempArticleList from './TempArticleList'

class TopNews extends React.Component {

  render() {
    return (
      <div className="top-news">
        <h1>Top News</h1>
        {/* <ArticleList articles={this.props.articles}/> */}
        <TempArticleList />
        <TempArticleList />
        <TempArticleList />
        <TempArticleList />
        <TempArticleList />
        <TempArticleList />
        <TempArticleList />
        <TempArticleList />
        <TempArticleList />
        <TempArticleList />
      </div>
    )
  }
}

export default TopNews
