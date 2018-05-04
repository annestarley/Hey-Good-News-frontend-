import React from 'react'
import Article from './Article'

const ArticleList = (props) => {
  // if there are less than 10 articles there might be issues
  let articles = props.articles.slice(0, 10)
  return (
    <div>
      {
        articles.map((article, i) => {
          if (i === (props.articles.length - 1)) {

          }
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
