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
    return (
      <div>
        <div>
          <Button color="primary"  onClick={this.toggle} style={{ marginBottom: "1rem" }}>See Results</Button>
          <Collapse isOpen={this.state.collapse}>
            <div className="user-article-results">
              <h5>Results For "{this.props.title}"</h5>
              <p><strong>Emotional Tones:</strong></p>
              <p className="user-article-tone">anger: {(this.props.anger * 100).toFixed(2)}</p>
              <p className="user-article-tone">disgust: {(this.props.disgust * 100).toFixed(2)}</p>
              <p className="user-article-tone">fear: {(this.props.fear * 100).toFixed(2)}</p>
              <p className="user-article-tone">joy: {(this.props.joy * 100).toFixed(2)}</p>
              <p><strong>Language Tones:</strong></p>
              <p className="user-article-tone">analytical: {(this.props.analytical * 100).toFixed(2)}</p>
              <p className="user-article-tone">confident: {(this.props.confident * 100).toFixed(2)}</p>
              <p className="user-article-tone">tentative: {(this.props.tentative * 100).toFixed(2)}</p>
              <p><strong>Social Tones:</strong></p>
              <p className="user-article-tone">agreeableness: {(this.props.agreeableness * 100).toFixed(2)}</p>
              <p className="user-article-tone">conscientiousness: {(this.props.conscientiousness * 100).toFixed(2)}</p>
              <p className="user-article-tone">extraversion: {(this.props.extraversion * 100).toFixed(2)}</p>
              <p className="user-article-tone">openness: {(this.props.openness * 100).toFixed(2)}</p>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default UserArticleCollapse;
