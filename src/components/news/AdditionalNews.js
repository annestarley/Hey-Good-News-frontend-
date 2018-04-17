import React, { Component } from 'react';
import ArticleList from './ArticleList'
import axios from 'axios'
import TempArticleList from './TempArticleList'
import AdditionalNewsArticleList from './AdditionalNewsArticleList'

const backendURL = 'https://hey-good-news.herokuapp.com'

class AdditionalNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: true
    }
  }

  componentDidMount() {
    this.getTopArticles()
  }

  getTopArticles() {
    axios.get(`${backendURL}/${this.props.category}`)
      .then(res => {
        console.log(res.data)
        console.log('RES', res)
        this.setState({
          articles: res.data,
          loading: false
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render () {
    return (
      <div className="top-news additional-news">
        {this.state.articles.length ? <AdditionalNewsArticleList articles={this.state.articles} searchParameter={this.props.searchParameter} /> : null}
        {this.state.loading ? <img src="Loading3.gif" className="additional-news-loading"/> : null}
        {/* <TempArticleList searchParameter={this.props.searchParameter} />
        <TempArticleList searchParameter={this.props.searchParameter} />
        <TempArticleList searchParameter={this.props.searchParameter} />
        <TempArticleList searchParameter={this.props.searchParameter} />
        <TempArticleList searchParameter={this.props.searchParameter} /> */}
      </div>
    )
  }
}

export default AdditionalNews
