import React, { Component } from 'react';
import ArticleList from './ArticleList'
import SignupTab from '../signup/SignupTab'

import TempArticleList from './TempArticleList'

class TopNews extends React.Component {

  render() {
    return (
      <div>
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
