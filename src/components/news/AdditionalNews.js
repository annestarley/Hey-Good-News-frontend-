import React, { Component } from 'react';
import ArticleList from './ArticleList'
import axios from 'axios'
import TempArticleList from './TempArticleList'
import AdditionalNewsArticleList from './AdditionalNewsArticleList'

const backendURL = 'http://localhost:8000'

class AdditionalNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: true
    }
  }

  // componentDidMount() {
  //   this.getTopArticles()
  // }
  //
  // getTopArticles() {
  //   debugger
  //   axios.get(`${backendURL}/${this.props.category}`)
  //     .then(res => {
  //       debugger
  //       console.log(res.data)
  //       this.setState({
  //         articles: res.data,
  //         loading: false
  //       })
  //     })
  //     .catch(err => {
  //       debugger
  //       console.log(err);
  //     })
  // }

  render () {
    return (
      <div className="top-news additional-news">
        <AdditionalNewsArticleList articles={this.state.articles} searchParameter={this.props.searchParameter} />
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
