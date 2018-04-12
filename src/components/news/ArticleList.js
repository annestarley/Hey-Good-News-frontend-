import React from 'react'
import Article from './Article'

const ArticleList = (props) => {
  return (
    <div>
      {
        props.articles.map((article, i) => {
          return <Article
            {...article}
            articles={props.articles}
            key={i}
            searchParameter={props.searchParameter}
            chosenTone={props.chosenTone}
          />
        })
      }
    </div>
  )
}

export default ArticleList
