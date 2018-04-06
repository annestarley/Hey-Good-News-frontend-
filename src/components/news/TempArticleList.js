import React from 'react'
import TempTonesToggle from './TempTonesToggle'

import Highlighter from 'react-highlight-words'



const TempArticleList = (props) => {
  return (
    <div>
      <a style={{display: "table-cell"}} href="http://www.latimes.com/business/la-fi-virgin-galactic-20180404-story.html" target="_blank"><h4><strong>Woman Claims Parents' Fertility Doctor Used His Own Sperm to Impregnate Her Mother</strong></h4></a>
      <p className="source-time">People.com - Published 6 minutes and 6 secs ago</p>
      <p className="description">Celtics point guard Kyrie Irving will undergo a second procedure on his left knee to remove screws inserted in 2015 after an infection was discovered during his most recent surgery on March 24. He will miss the rest of the regular season and playoffs.</p>
      <div className="tones">
        <p>
          <span className="top-tones">Top tones:</span>
          <span className="top-tones">
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[props.searchParameter]}
              autoEscape={true}
              textToHighlight="joy 20.95%"
            />
          </span>
          <span className="top-tones">
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[props.searchParameter]}
              autoEscape={true}
              textToHighlight="confident 79.90%"
            />
          </span>
          <span className="top-tones">
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[props.searchParameter]}
              autoEscape={true}
              textToHighlight="emotional range 90.61%"
            />
          </span>
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
