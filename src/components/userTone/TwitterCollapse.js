import React, { Component } from 'react';
import { Button, Collapse, Input } from 'mdbreact';

class TwitterCollapse extends Component {
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
          <Button color="primary"  onClick={this.toggle} style={{ marginBottom: "1rem" }}>Enter my Twitter handle!</Button>
          <Collapse isOpen={this.state.collapse}>
            <Input type="text" placeholder="twitter handle"></Input>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default TwitterCollapse;
