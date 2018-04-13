import React from 'react'
import AdditionalNewsArticle from './AdditionalNewsArticle'

const AdditionalArticleList = (props) => {
  // if there are less than 10 articles there might be issues
  // let articles = props.articles.slice(props.articles.length - 10).reverse()
  return (
    <div>
      {
        props.articles.map((article, i) => {
          if (i === (props.articles.length - 1)) {

          }
          return <AdditionalNewsArticle
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

export default AdditionalArticleList
