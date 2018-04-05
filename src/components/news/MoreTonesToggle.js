import React, { Component } from 'react';
import { Collapse } from 'mdbreact';

class MoreTonesToggle extends Component {
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
    console.log(this.props.tone)
    return (
      <div>
        <div>
          <a href="#" onClick={this.toggle}>See more...</a>
          <Collapse isOpen={this.state.collapse}>
            <div>
              <p id="other-tones"><strong>Emotional:</strong> anger {(this.props.tone.emotion.anger * 100).toFixed(2)}%, disgust {(this.props.tone.emotion.disgust * 100).toFixed(2)}%, fear {(this.props.tone.emotion.fear * 100).toFixed(2)}%, joy {(this.props.tone.emotion.joy * 100).toFixed(2)}%</p>
              <p><strong>Language:</strong> analytical {(this.props.tone.language.analytical * 100).toFixed(2)}%, confident {(this.props.tone.language.analytical * 100).toFixed(2)}%, tentative {(this.props.tone.language.analytical * 100).toFixed(2)}%</p>
              <p><strong>Social:</strong> agreeableness {(this.props.tone.social.agreeableness * 100).toFixed(2)}%, conscientiousness {(this.props.tone.social.conscientiousness * 100).toFixed(2)}%, emotional range {(this.props.tone.social.emotionalRange * 100).toFixed(2)}%, extraversion {(this.props.tone.social.extraversion * 100).toFixed(2)}%, openness {(this.props.tone.social.openness * 100).toFixed(2)}%</p>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default MoreTonesToggle;
