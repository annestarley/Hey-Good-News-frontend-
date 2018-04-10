import React from 'react';
import ArticleList from './ArticleList'
import SignupTab from '../signup/SignupTab'
import DropdownTone from './DropdownTone'

import TempArticleList from './TempArticleList'

const TopNews = (props) =>{
  return (
    <div>
      <div className="sort">
        <h4>Sort the news by tone?</h4>
        <p>All news articles with this tone as a top tone will pop to the top</p>
        <DropdownTone />
      </div>
      <ArticleList articles={props.articles} searchParameter={props.searchParameter} />
      {/* <TempArticleList searchParameter={props.searchParameter} />
      <TempArticleList searchParameter={props.searchParameter} />
      <TempArticleList searchParameter={props.searchParameter} />
      <TempArticleList searchParameter={props.searchParameter} />
      <TempArticleList searchParameter={props.searchParameter} />
      <TempArticleList searchParameter={props.searchParameter} />
      <TempArticleList searchParameter={props.searchParameter} />
      <TempArticleList searchParameter={props.searchParameter} />
      <TempArticleList searchParameter={props.searchParameter} />
      <TempArticleList searchParameter={props.searchParameter} /> */}
    </div>
  )
}

export default TopNews
