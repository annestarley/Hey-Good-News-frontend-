import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
  class DropdownPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      toneName: 'Choose A Tone'
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  getTone = (e) => {
    this.setState({
      toneName: e.target.innerText
    })
    this.props.setChosenTone(e.target.innerText.toLowerCase())
  }

  render() {
    return (
      <div>
        <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle } onChange={this.test}>
          <DropdownToggle caret color="primary">
            {this.state.toneName}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.getTone}>Joy</DropdownItem>
            <DropdownItem onClick={this.getTone}>Anger</DropdownItem>
            <DropdownItem onClick={this.getTone}>Disgust</DropdownItem>
            <DropdownItem onClick={this.getTone}>Fear</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Analytical</DropdownItem>
            <DropdownItem>Confident</DropdownItem>
            <DropdownItem>Tentative</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Agreeableness</DropdownItem>
            <DropdownItem>Conscientiousness</DropdownItem>
            <DropdownItem>Extraversion</DropdownItem>
            <DropdownItem>Openness</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
export default DropdownPage;