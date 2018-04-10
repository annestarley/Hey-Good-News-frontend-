
import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
  class DropdownPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
        <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle }>
          <DropdownToggle caret color="primary">
            Choose A Tone
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another Action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
    );
  }
}
export default DropdownPage;
