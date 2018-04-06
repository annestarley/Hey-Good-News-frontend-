import React, { Component } from 'react';
import ArticleList from './ArticleList'
import SignupTab from '../signup/SignupTab'

import TempArticleList from './TempArticleList'
// import {Link} from 'react-router-dom'

class TopNews extends React.Component {

  render() {
    return (
      <div>
        {/* <div className="row"> */}
          {/* <div className="col-md-8 col-sm-12 top-news"> */}
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
          {/* </div> */}
          {/* <div className="col-md-4 col-sm-12"> */}
            {/* <div className="row">
              <SignupTab />
            </div>
            <div className="row">

            </div>
            <div className="row">

            </div> */}
          {/* </div> */}
      </div>
    )
  }
}

export default TopNews
