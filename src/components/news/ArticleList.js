import React from 'react'
import Article from './Article'

const ArticleList = (props) => {
  return (
    <div>
      {console.log(props.articles)}
      {
        props.articles.map((article) => <Article {...article} searchParameter={props.searchParameter}/>)
      }
    </div>
  )
}

export default ArticleList
