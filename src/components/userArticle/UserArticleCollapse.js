import React, { Component } from 'react';
import { Button, Collapse } from 'mdbreact';

class UserArticleCollapse extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {

    let topEmotionalTone = this.props.article.anger
    let topEmotionalToneName = 'anger'
    if (parseFloat(this.props.article.disgust) > parseFloat(topEmotionalTone)) {
      topEmotionalTone = this.props.article.disgust
      topEmotionalToneName = 'disgust'
    }
    if (parseFloat(this.props.article.fear) > parseFloat(topEmotionalTone)) {
      topEmotionalTone = this.props.article.fear
      topEmotionalToneName = 'fear'
    }
    if (parseFloat(this.props.article.joy) > parseFloat(topEmotionalTone)) {
      topEmotionalTone = this.props.article.joy
      topEmotionalToneName = 'joy'
    }

    let topLanguageTone = this.props.article.analytical
    let topLanguageToneName = 'analytical'
    if (parseFloat(this.props.article.confident) > parseFloat(topLanguageTone)) {
      topLanguageTone = this.props.article.confident
      topLanguageToneName = 'confident'
    }
    if (parseFloat(this.props.article.tentative) > parseFloat(topLanguageTone)) {
      topLanguageTone = this.props.article.tentative
      topLanguageToneName = 'tentative'
    }

    let topSocialTone = this.props.article.agreeableness
    let topSocialToneName = 'agreeableness'
    if (parseFloat(this.props.article.conscientiousness) > parseFloat(topSocialTone)) {
      topSocialTone = this.props.article.conscientiousness
      topSocialToneName = 'conscientiousness'
    }
    if (parseFloat(this.props.article.extraversion) > parseFloat(topSocialTone)) {
      topSocialTone = this.props.article.extraversion
      topSocialToneName = 'extraversion'
    }
    if (parseFloat(this.props.article.openness) > parseFloat(topSocialTone)) {
      topSocialTone = this.props.article.openness
      topSocialToneName = 'openness'
    }

    console.log(topEmotionalTone)
    console.log(topEmotionalToneName);
    console.log(typeof topEmotionalTone)

    return (
      <div>
        <div>
          <Button color="primary"  onClick={this.toggle} style={{ marginBottom: "1rem" }}>See Results</Button>
          <Collapse isOpen={this.state.collapse}>
            <div className="user-article-results">
              <h5>Results For "{this.props.article.title}"</h5>
              <p><strong>Top Tones:</strong></p>
              <p className="user-article-tone"><strong>{topEmotionalToneName} {(topEmotionalTone * 100).toFixed(2)}%</strong></p>
              <p className="user-article-tone"><strong>{topLanguageToneName} {(topLanguageTone * 100).toFixed(2)}%</strong></p>
              <p className="user-article-tone"><strong>{topSocialToneName} {(topSocialTone * 100).toFixed(2)}%</strong></p>
              <p><strong>Emotional Tones:</strong></p>
              <p className="user-article-tone">anger: {(this.props.article.anger * 100).toFixed(2)}%</p>
              <p className="user-article-tone">disgust: {(this.props.article.disgust * 100).toFixed(2)}%</p>
              <p className="user-article-tone">fear: {(this.props.article.fear * 100).toFixed(2)}%</p>
              <p className="user-article-tone">joy: {(this.props.article.joy * 100).toFixed(2)}%</p>
              <p><strong>Language Tones:</strong></p>
              <p className="user-article-tone">analytical: {(this.props.article.analytical * 100).toFixed(2)}%</p>
              <p className="user-article-tone">confident: {(this.props.article.confident * 100).toFixed(2)}%</p>
              <p className="user-article-tone">tentative: {(this.props.article.tentative * 100).toFixed(2)}%</p>
              <p><strong>Social Tones:</strong></p>
              <p className="user-article-tone">agreeableness: {(this.props.article.agreeableness * 100).toFixed(2)}%</p>
              <p className="user-article-tone">conscientiousness: {(this.props.article.conscientiousness * 100).toFixed(2)}%</p>
              <p className="user-article-tone">extraversion: {(this.props.article.extraversion * 100).toFixed(2)}%</p>
              <p className="user-article-tone">openness: {(this.props.article.openness * 100).toFixed(2)}%</p>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default UserArticleCollapse;
