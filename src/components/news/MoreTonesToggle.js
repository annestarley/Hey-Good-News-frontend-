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
    return (
      <div>
        <div>
          <a href="#" onClick={this.toggle}>See more...</a>
          <Collapse isOpen={this.state.collapse}>
            <div>
              <p id="other-tones"><strong>Emotional:</strong> anger 10.01%, disgust 8.99%, fear 10.94%, joy 53.82%</p>
              <p><strong>Language:</strong> analytical 53.81%, confident 0.00%, tentative 65.25%</p>
              <p><strong>Social:</strong> agreeableness 26.81%, conscientiousness 57.00%, emotionalRange 66.72%, extraversion 52.40%, openness 68.24%</p>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default MoreTonesToggle;
