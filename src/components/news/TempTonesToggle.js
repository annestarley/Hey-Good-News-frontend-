import React, { Component } from 'react';
import { Collapse } from 'mdbreact';

class TempTonesToggle extends Component {
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
              <p id="other-tones"><strong>Emotional:</strong> anger 1.11%, disgust 6.66%, fear 9.99%, joy 12.12%</p>
              <p><strong>Language:</strong> analytical 3.33%, confident 4.44%, tentative 9.99%</p>
              <p><strong>Social:</strong> agreeableness 54.0%, conscientiousness 88.8%, emotional range 99.99%, extraversion 22.2%, openness 12.34%</p>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default TempTonesToggle;
