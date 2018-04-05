import React from 'react'
import MoreTonesToggle from './MoreTonesToggle'

const Article = (props) => {

  let topEmotionalTone = props.tone.emotion.anger
  let topEmotionalToneName = 'anger'
  if (parseFloat(props.tone.emotion.disgust) > parseFloat(topEmotionalTone)) {
    topEmotionalTone = props.tone.emotion.disgust
    topEmotionalToneName = 'disgust'
  }
  if (parseFloat(props.tone.emotion.fear) > parseFloat(topEmotionalTone)) {
    topEmotionalTone = props.tone.emotion.fear
    topEmotionalToneName = 'disgust'
  }
  if (parseFloat(props.tone.emotion.joy) > parseFloat(topEmotionalTone)) {
    topEmotionalTone = props.tone.emotion.joy
    topEmotionalToneName = 'joy'
  }

  let topLanguageTone = props.tone.language.analytical
  let topLanguageToneName = 'analytical'
  if (parseFloat(props.tone.language.confident) > parseFloat(topLanguageTone)) {
    topLanguageTone = props.tone.language.confident
    topLanguageToneName = 'confident'
  }
  if (parseFloat(props.tone.language.tentative) > parseFloat(topLanguageTone)) {
    topLanguageTone = props.tone.language.tentative
    topLanguageToneName = 'tentative'
  }

  let topSocialTone = props.tone.social.agreeableness
  let topSocialToneName = 'agreeableness'
  if (parseFloat(props.tone.social.conscientiousness) > parseFloat(topSocialTone)) {
    topSocialTone = props.tone.social.conscientiousness
    topSocialToneName = 'conscientiousness'
  }
  if (parseFloat(props.tone.social.emotionalRange) > parseFloat(topSocialTone)) {
    topSocialTone = props.tone.social.emotionalRange
    topSocialToneName = 'emotional range'
  }
  if (parseFloat(props.tone.social.extraversion) > parseFloat(topSocialTone)) {
    topSocialTone = props.tone.social.extraversion
    topSocialToneName = 'extraversion'
  }
  if (parseFloat(props.tone.social.openness) > parseFloat(topSocialTone)) {
    topSocialTone = props.tone.social.openness
    topSocialToneName = 'openness'
  }
  //
  // function openInNewTab(url) {
  //   var win = window.open(url, '_blank');
  //   win.focus();
  // }

  return (
    <div>
      <a style={{display: "table-cell"}} href="https://www.nytimes.com/2018/04/04/business/media/roseanne-ratings-abc.html" target="_blank"><h4><strong>{props.title}</strong></h4></a>
      <p className="source-time">{props.source.name} - Published {props.publishedAt}</p>
      <p className="description">{props.description}</p>
      <div className="tones">
        <p>
          <span className="top-tones">Top tones:</span>
          <span className="top-tones">{topEmotionalToneName} {(topEmotionalTone * 100).toFixed(2)}% </span>
          <span className="top-tones">{topLanguageToneName} {(topLanguageTone * 100).toFixed(2)}%</span>
          <span className="top-tones">{topSocialToneName} {(topSocialTone * 100).toFixed(2)}%</span>
        </p>
        <div id="read-more-toggle">
          <MoreTonesToggle tone={props.tone}/>
        </div>
      </div>

      <br></br>
    </div>
  )
}

export default Article
