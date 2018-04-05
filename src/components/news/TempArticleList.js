import React from 'react'
import TempTonesToggle from './TempTonesToggle'


const TempArticleList = () => {
  return (
    <div>
      <a href="https://www.nytimes.com/2018/04/04/business/media/roseanne-ratings-abc.html"><h4><strong>Woman Claims Parents' Fertility Doctor Used His Own Sperm to Impregnate Her Mother</strong></h4></a>
      <p className="source-time">People.com - Published 6 minutes and 6 secs ago</p>
      <p className="description">Celtics point guard Kyrie Irving will undergo a second procedure on his left knee to remove screws inserted in 2015 after an infection was discovered during his most recent surgery on March 24. He will miss the rest of the regular season and playoffs.</p>
      <div className="tones">
        <p>
          <span className="top-tones">Top tones:</span>
          <span className="top-tones">joy 20.95% </span>
          <span className="top-tones">confident 79.90%</span>
          <span className="top-tones">emotional range 90.61%</span>
        </p>
        <div id="read-more-toggle">
          <TempTonesToggle />
        </div>
      </div>

      <br></br>
    </div>
  )
}

export default TempArticleList
