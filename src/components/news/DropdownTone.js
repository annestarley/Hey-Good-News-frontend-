
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
      <div>
        <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle }>
          <DropdownToggle caret color="primary">
            Choose A Tone
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Joy</DropdownItem>
            <DropdownItem href="#">Anger</DropdownItem>
            <DropdownItem href="#">Disgust</DropdownItem>
            <DropdownItem href="#">Fear</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem href="#">Analytical</DropdownItem>
            <DropdownItem href="#">Confident</DropdownItem>
            <DropdownItem href="#">Tentative</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem href="#">Agreeableness</DropdownItem>
            <DropdownItem href="#">Conscientiousness</DropdownItem>
            <DropdownItem href="#">Extraversion</DropdownItem>
            <DropdownItem href="#">Openness</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
export default DropdownPage;
