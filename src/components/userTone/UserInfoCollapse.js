import React, { Component } from 'react';
import { Button, Collapse, Input } from 'mdbreact';

class UserInfoCollapse extends Component {
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
          <Button color="primary"  onClick={this.toggle} style={{ marginBottom: "1rem" }}>Enter my own info!</Button>
          <Collapse isOpen={this.state.collapse}>
            {/* <input
              className="user-story"
              type="text"
              placeholder="Your text"
              cols="10"
              rows="10"
              name="Text1"
              id="Text1"
              ></input> */}
              <textarea class="input" rows="10" cols="10">Some text here</textarea>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default UserInfoCollapse;
