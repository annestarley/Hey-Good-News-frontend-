import React, { Component } from 'react';
import { Navbar, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, NavLink as LinkReact, Link as ReactLink } from 'react-router-dom';

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
          <div>
            <Navbar color="black" dark expand="md" scrolling>
                {/* <NavbarBrand href="/">
                    <strong>Navbar</strong>
                </NavbarBrand> */}
                {/* scrolling */}
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                      <NavItem active>
                          <NavLink to="/top-news">Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/science">Science</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/sports">Sports</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/business">Business</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/entertainment">Entertainment</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/health">Health</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/technology">Technology</NavLink>
                      </NavItem>
                      <NavItem>
                          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                          <DropdownToggle nav caret>Dropdown</DropdownToggle>
                          <DropdownMenu>
                              <DropdownItem href="#">Need some good news?</DropdownItem>
                              <DropdownItem href="#">Find your tone!</DropdownItem>
                              <DropdownItem href="#">Don't see your article?</DropdownItem>
                              <DropdownItem href="#">Something else here</DropdownItem>
                          </DropdownMenu>
                          </Dropdown>
                      </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                      <NavItem>
                        <form className="form-inline md-form mt-0">
                          <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search top tones" aria-label="Search" onChange={this.props.setSearchParameter}/>
                        </form>
                      </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
          </div>
        );
    }
}

export default NavbarFeatures
