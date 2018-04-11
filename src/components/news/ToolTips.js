
import React from 'react';
import { Tooltip } from 'mdbreact';

class TooltipsPage extends React.Component {
  render(props) {
    let count = 0
    let anger = this.props.article.anger
    let disgust = this.props.article.disgust
    let fear = this.props.article.fear
    let joy = this.props.article.joy

    this.props.article.articles.forEach(article => {
      if (this.props.article.source === article.source) {
        count++
        anger = (anger + article.anger)/2
        disgust = (disgust + article.disgust)/2
        fear = (fear + article.fear)/2
        joy = (joy + article.joy)/2
      }
    })

    let overallTopEmotionalTone = anger
    let overAllTopEmotionalToneName = 'Anger'
    if (disgust > overallTopEmotionalTone) {
      overallTopEmotionalTone = disgust
      overAllTopEmotionalToneName = 'Disgust'
    }
    if (fear > overallTopEmotionalTone) {
      overallTopEmotionalTone = fear
      overAllTopEmotionalToneName = 'Fear'
    }
    if (joy > overallTopEmotionalTone) {
      overallTopEmotionalTone = joy
      overAllTopEmotionalToneName = 'Joy'
    }

    let toolTipContent = `Overall top emotional tone for all ${this.props.article.source} articles: ${overAllTopEmotionalToneName} ${(overallTopEmotionalTone * 100).toFixed(2)}% - Total articles posted: ${count}`
    return (
      <div style={{display: "inline-block"}}>
        <Tooltip
          placement="top"
          componentClass="p"
          tag="div"
          component="div"
          tooltipContent={toolTipContent}>
            {this.props.article.source}
        </Tooltip>
      </div>
    )
  }
}

export default TooltipsPage
