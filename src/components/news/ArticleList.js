import React from 'react'
import Article from './Article'

const ArticleList = (props) => {
  return (
    <div>
      {
        props.articles.map((article, i) => <Article {...article} articles={props.articles} key={i} searchParameter={props.searchParameter}/>)
      }
    </div>
  )
}

export default ArticleList
