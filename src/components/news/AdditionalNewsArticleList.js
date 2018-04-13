import React from 'react'
import AdditionalNewsArticle from './AdditionalNewsArticle'

const AdditionalArticleList = (props) => {
  // if there are less than 10 articles there might be issues
  // let articles = props.articles.slice(props.articles.length - 10).reverse()

          console.log(props.articles)
  return (
    <div>
      {
        props.articles.map((article, i) => {
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
