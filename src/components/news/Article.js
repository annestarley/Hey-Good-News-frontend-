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
    topEmotionalToneName = 'fear'
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
  // if (parseFloat(props.tone.social.emotionalRange) > parseFloat(topSocialTone)) {
  //   topSocialTone = props.tone.social.emotionalRange
  //   topSocialToneName = 'emotional range'
  // }
  if (parseFloat(props.tone.social.extraversion) > parseFloat(topSocialTone)) {
    topSocialTone = props.tone.social.extraversion
    topSocialToneName = 'extraversion'
  }
  if (parseFloat(props.tone.social.openness) > parseFloat(topSocialTone)) {
    topSocialTone = props.tone.social.openness
    topSocialToneName = 'openness'
  }


  var date = new Date().toUTCString().split(' ')
  let currentTime = date[4].split(':')

  let propsTime = props.publishedAt.toString().split('T')
  let publishedTime = propsTime[1].split('Z')
  publishedTime = publishedTime[0].split(':')

  let hours = currentTime[0] - publishedTime[0]
  let mins = currentTime[1] - publishedTime[1]
  let secs = currentTime[2] - publishedTime[2]

  let secondsTotal = hours*3600 + mins*60 + secs
  let hoursFinal = Math.floor(secondsTotal/3600)
  secondsTotal -= hoursFinal * 3600
  let minutes = Math.floor(secondsTotal/60)
  let seconds = secondsTotal - (minutes * 60)

  if (hoursFinal == 0) hoursFinal = ''
  else if (hoursFinal == 1) hoursFinal = '1 hour'
  else hoursFinal = `${hoursFinal} hours`
  if (minutes == 0) minutes = ''
  else if (minutes == 1) minutes = '1 minute'
  else minutes = `${minutes} minutes`
  if (seconds == 0) seconds = ''
  else if (seconds == 1) seconds = '1 secs'
  else seconds = `${seconds} secs`

  let publishedTimeDifference = `${hoursFinal} ${minutes} ${seconds} ago`

  return (
    <div>
      <a style={{display: "table-cell"}} href={props.url} target="_blank"><h4><strong>{props.title}</strong></h4></a>
      <p className="source-time">{props.source.name} - Published {publishedTimeDifference}</p>
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
