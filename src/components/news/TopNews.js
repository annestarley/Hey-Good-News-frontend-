import React, { Component } from 'react';

class TopNews extends React.Component {
  render() {
    return (
      <div className="top-news">
        <h1>Top News</h1>

        {/* practice */}
        <div>
          <a href="https://www.nytimes.com/2018/04/04/business/media/roseanne-ratings-abc.html"><h4><strong>'Roseanne' Mania Cools Slightly in Show's Second Week</strong></h4></a>
          <p className="source-time">The New York Times - Published 2018-04-04T16:36:53Z</p>
          <p className="description">The ratings for the show’s second night are down from its surprising premiere, but still strong enough for ABC to call it a hit.</p>
          <br></br>
        </div>
      </div>
    )
  }
}

export default TopNews
