import React from 'react';
import ArticleList from './ArticleList'
import SignupTab from '../signup/SignupTab'

import TempArticleList from './TempArticleList'

const TopNews = (props) =>{
  return (
    <div>
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
