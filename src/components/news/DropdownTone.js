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
          <DropdownToggle caret color="warning">
            {this.state.toneName}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.getTone}>Joy</DropdownItem>
            <DropdownItem onClick={this.getTone}>Anger</DropdownItem>
            <DropdownItem onClick={this.getTone}>Disgust</DropdownItem>
            <DropdownItem onClick={this.getTone}>Fear</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem onClick={this.getTone}>Analytical</DropdownItem>
            <DropdownItem onClick={this.getTone}>Confident</DropdownItem>
            <DropdownItem onClick={this.getTone}>Tentative</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem onClick={this.getTone}>Agreeableness</DropdownItem>
            <DropdownItem onClick={this.getTone}>Conscientiousness</DropdownItem>
            <DropdownItem onClick={this.getTone}>Extraversion</DropdownItem>
            <DropdownItem onClick={this.getTone}>Openness</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
export default DropdownPage;
