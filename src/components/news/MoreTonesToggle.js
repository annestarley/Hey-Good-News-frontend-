import React, { Component } from 'react';
import { Collapse } from 'mdbreact';

class MoreTonesToggle extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false,
      linkText: 'See more...'
    };
  }

  toggle(e) {
    e.preventDefault()
    this.setState({ collapse: !this.state.collapse });
    if (this.state.linkText === 'See more...') {
      this.setState({ linkText: 'See less...'})
    } else {
      this.setState({ linkText: 'See more...'})
    }
  }

  render() {
    return (
      <div>
        <div>
          <a href="#" onClick={this.toggle}>{this.state.linkText}</a>
          <Collapse isOpen={this.state.collapse}>
            <div>
              <p id="other-tones"><strong>Emotional:</strong> anger {(this.props.article.anger * 100).toFixed(2)}%, disgust {(this.props.article.disgust * 100).toFixed(2)}%, fear {(this.props.article.fear * 100).toFixed(2)}%, joy {(this.props.article.joy * 100).toFixed(2)}%</p>
              <p><strong>Language:</strong> analytical {(this.props.article.analytical * 100).toFixed(2)}%, confident {(this.props.article.confident * 100).toFixed(2)}%, tentative {(this.props.article.tentative * 100).toFixed(2)}%</p>
              <p><strong>Social:</strong> agreeableness {(this.props.article.agreeableness * 100).toFixed(2)}%, conscientiousness {(this.props.article.conscientiousness * 100).toFixed(2)}%, extraversion {(this.props.article.extraversion * 100).toFixed(2)}%, openness {(this.props.article.openness * 100).toFixed(2)}%</p>
              {/* emotional range {(this.props.tone.social.emotionalRange * 100).toFixed(2)}%, */}
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}


export default MoreTonesToggle;
