import React from 'react'
import Article from './Article'

const ArticleList = (props) => {

  return (
    <div>
      {console.log(props.articles)}
      {
        props.articles.map(article => <Article {...article}/>)
      }
    </div>
  )
}

export default ArticleList
