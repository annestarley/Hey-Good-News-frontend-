import React, { Component } from 'react';
import { Button, Collapse } from 'mdbreact';

class UserToneCollapse extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false,
    };
  }

  toggle(e) {
    e.preventDefault()
    this.setState({ collapse: !this.state.collapse });
  }

  render() {

    let topEmotionalTone = this.props.userTone.anger
    let topEmotionalToneName = 'anger'
    if (parseFloat(this.props.userTone.disgust) > parseFloat(topEmotionalTone)) {
      topEmotionalTone = this.props.userTone.disgust
      topEmotionalToneName = 'disgust'
    }
    if (parseFloat(this.props.userTone.fear) > parseFloat(topEmotionalTone)) {
      topEmotionalTone = this.props.userTone.fear
      topEmotionalToneName = 'fear'
    }
    if (parseFloat(this.props.userTone.joy) > parseFloat(topEmotionalTone)) {
      topEmotionalTone = this.props.userTone.joy
      topEmotionalToneName = 'joy'
    }

    let topLanguageTone = this.props.userTone.analytical
    let topLanguageToneName = 'analytical'
    if (parseFloat(this.props.userTone.confident) > parseFloat(topLanguageTone)) {
      topLanguageTone = this.props.userTone.confident
      topLanguageToneName = 'confident'
    }
    if (parseFloat(this.props.userTone.tentative) > parseFloat(topLanguageTone)) {
      topLanguageTone = this.props.userTone.tentative
      topLanguageToneName = 'tentative'
    }

    let topSocialTone = this.props.userTone.agreeableness
    let topSocialToneName = 'agreeableness'
    if (parseFloat(this.props.userTone.conscientiousness) > parseFloat(topSocialTone)) {
      topSocialTone = this.props.userTone.conscientiousness
      topSocialToneName = 'conscientiousness'
    }
    if (parseFloat(this.props.userTone.extraversion) > parseFloat(topSocialTone)) {
      topSocialTone = this.props.userTone.extraversion
      topSocialToneName = 'extraversion'
    }
    if (parseFloat(this.props.userTone.openness) > parseFloat(topSocialTone)) {
      topSocialTone = this.props.userTone.openness
      topSocialToneName = 'openness'
    }

    return (
      <div>
        <div>
          <Button color="mdb-color darken-2"  onClick={this.toggle} style={{ marginBottom: "1rem" }}>See Results</Button>
          <Collapse isOpen={this.state.collapse}>
            <div className="user-article-results">
              <h5>Results For "{this.props.userTone.title}"</h5>
              <div className="top-user-tones">
                <p><strong>Top Tones:</strong></p>
                <p className="user-article-tone"><strong>{topEmotionalToneName}: {(topEmotionalTone * 100).toFixed(2)}%</strong></p>
                <p className="user-article-tone"><strong>{topLanguageToneName}: {(topLanguageTone * 100).toFixed(2)}%</strong></p>
                <p className="user-article-tone"><strong>{topSocialToneName}: {(topSocialTone * 100).toFixed(2)}%</strong></p>
              </div>
              <div className="user-article-tones">
                <p><strong>Emotional Tones:</strong></p>
                <p className="user-article-tone">anger: {(this.props.userTone.anger * 100).toFixed(2)}%</p>
                <p className="user-article-tone">disgust: {(this.props.userTone.disgust * 100).toFixed(2)}%</p>
                <p className="user-article-tone">fear: {(this.props.userTone.fear * 100).toFixed(2)}%</p>
                <p className="user-article-tone">joy: {(this.props.userTone.joy * 100).toFixed(2)}%</p>
              </div>
              <div className="user-article-tones">
                <p><strong>Language Tones:</strong></p>
                <p className="user-article-tone">analytical: {(this.props.userTone.analytical * 100).toFixed(2)}%</p>
                <p className="user-article-tone">confident: {(this.props.userTone.confident * 100).toFixed(2)}%</p>
                <p className="user-article-tone">tentative: {(this.props.userTone.tentative * 100).toFixed(2)}%</p>
              </div>
              <div className="user-article-tones">
                <p><strong>Social Tones:</strong></p>
                <p className="user-article-tone">agreeableness: {(this.props.userTone.agreeableness * 100).toFixed(2)}%</p>
                <p className="user-article-tone">conscientiousness: {(this.props.userTone.conscientiousness * 100).toFixed(2)}%</p>
                <p className="user-article-tone">extraversion: {(this.props.userTone.extraversion * 100).toFixed(2)}%</p>
                <p className="user-article-tone">openness: {(this.props.userTone.openness * 100).toFixed(2)}%</p>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default UserToneCollapse;
