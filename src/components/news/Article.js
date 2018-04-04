import React from 'react'

const Article = () => {
  return (
    <div>
      <a href="https://www.nytimes.com/2018/04/04/business/media/roseanne-ratings-abc.html"><h4><strong>'Roseanne' Mania Cools Slightly in Show's Second Week</strong></h4></a>
      <p className="source-time">The New York Times - Published 2018-04-04T16:36:53Z</p>
      <p className="description">The ratings for the show’s second night are down from its surprising premiere, but still strong enough for ABC to call it a hit.</p>
      <div className="tones">
        <p><span className="top-tones">joy 53.82% </span><span className="top-tones">tentative 65.25%</span> <span className="top-tones">openness 68.24%</span></p>
        <p><strong>Emotional:</strong> anger 10.01%, disgust 8.99%, fear 10.94%, joy 53.82%</p>
        <p><strong>Language:</strong> analytical 53.81%, confident 0.00%, tentative 65.25%</p>
        <p><strong>Social:</strong> agreeableness 26.81%, conscientiousness 57.00%, emotionalRange 66.72%, extraversion 52.40%, openness 68.24%</p>
      </div>

      <br></br>
    </div>
  )
}

export default Article
