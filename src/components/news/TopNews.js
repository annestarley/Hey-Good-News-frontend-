import React, { Component } from 'react';
import Article from './Article'

class TopNews extends React.Component {
  render() {
    return (
      <div className="top-news">
        <h1>Top News</h1>
        <Article />
        <Article />
      </div>
    )
  }
}

export default TopNews
