import React from 'react'
import MoreTonesToggle from './MoreTonesToggle'

const Article = (props) => {

  // const topEmotionalTone = props.tone.emotion.anger
  // const topEmotionalToneName = 'anger'
  // if (parseFloat(props.tone.emotion.disgust) > parseFloat(topEmotionalTone)) {
  //   topEmotionalTone = props.tone.emotion.disgust
  //   topEmotionalToneName = 'disgust'
  // }
  // if (parseFloat(props.tone.emotion.fear) > parseFloat(topEmotionalTone)) {
  //   topEmotionalTone = props.tone.emotion.fear
  //   topEmotionalToneName = 'disgust'
  // }
  // if (parseFloat(props.tone.emotion.joy) > parseFloat(topEmotionalTone)) {
  //   topEmotionalTone = props.tone.emotion.joy
  //   topEmotionalToneName = 'joy'
  // }
  //
  // const topLanguageTone = props.tone.language.analytical
  // const topLanguageToneName = 'analytical'
  // if (parseFloat(props.tone.language.confident) > parseFloat(topLanguageTone)) {
  //   topLanguageTone = props.tone.language.confident
  //   topLanguageToneName = 'confident'
  // }
  // if (parseFloat(props.tone.language.tentative) > parseFloat(topLanguageTone)) {
  //   topLanguageTone = props.tone.language.tentative
  //   topLanguageToneName = 'tentative'
  // }
  //
  // const topSocialTone = props.tone.social.agreeableness
  // const topSocialToneName = 'agreeableness'
  // if (parseFloat(props.tone.social.conscientiousness) > parseFloat(topSocialTone)) {
  //   topSocialTone = props.tone.social.conscientiousness
  //   topSocialToneName = 'conscientiousness'
  // }
  // if (parseFloat(props.tone.social.emotionalRange) > parseFloat(topSocialTone)) {
  //   topSocialTone = props.tone.social.emotionalRange
  //   topSocialToneName = 'emotional range'
  // }
  // if (parseFloat(props.tone.social.extraversion) > parseFloat(topSocialTone)) {
  //   topSocialTone = props.tone.social.extraversion
  //   topSocialToneName = 'extraversion'
  // }
  // if (parseFloat(props.tone.social.openness) > parseFloat(topSocialTone)) {
  //   topSocialTone = props.tone.social.openness
  //   topSocialToneName = 'openness'
  // }

  return (
    <div>
      <a href="https://www.nytimes.com/2018/04/04/business/media/roseanne-ratings-abc.html"><h4><strong>{props.title}</strong></h4></a>
      <p className="source-time">{props.source.name} - Published {props.publishedAt}</p>
      <p className="description">{props.description}</p>
      <div className="tones">
        <p>
          <span className="top-tones">Top tones:</span>
          {/* <span className="top-tones">{topEmotionalToneName} {(topEmotionalTone * 100).toFixed(2) || '0.0'}% </span>
          <span className="top-tones">{topLanguageToneName} {(topLanguageTone * 100).toFixed(2) || '0.0'}%</span>
          <span className="top-tones">{topSocialToneName} {(topSocialTone * 100).toFixed(2) || '0.0'}%</span> */}
          <span className="top-tones">topEmotionalToneName 0.0% </span>
          <span className="top-tones">topLanguageToneName 0.0%</span>
          <span className="top-tones">topSocialToneName 0.0%</span>
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
