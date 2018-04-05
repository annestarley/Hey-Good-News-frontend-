import React, { Component } from 'react';
import ArticleList from './ArticleList'

import TempArticleList from './TempArticleList'

class TopNews extends React.Component {

  render() {
    return (
      <div>
        <h1 className="news-header">Top News</h1>
        <div className="row">
          <div className="col-md-8 col-sm-12 top-news">
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
          <div className="col-md-4 col-sm-12">
            <div className="row">

            </div>
            <div className="row">

            </div>
            <div className="row">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopNews
