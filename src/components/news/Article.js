import React from 'react'
import MoreTonesToggle from './MoreTonesToggle'

const Article = () => {
  return (
    <div>
      <a href="https://www.nytimes.com/2018/04/04/business/media/roseanne-ratings-abc.html"><h4><strong>'Roseanne' Mania Cools Slightly in Show's Second Week</strong></h4></a>
      <p className="source-time">The New York Times - Published 2018-04-04T16:36:53Z</p>
      <p className="description">The ratings for the show’s second night are down from its surprising premiere, but still strong enough for ABC to call it a hit.</p>
      <div className="tones">
        <p><span className="top-tones">Top tones:</span> <span className="top-tones">joy 53.82% </span><span className="top-tones">tentative 65.25%</span> <span className="top-tones">openness 68.24%</span></p>
        <div id="read-more-toggle">
          <MoreTonesToggle />
        </div>
      </div>

      <br></br>
    </div>
  )
}

export default Article
