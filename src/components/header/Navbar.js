import React, { Component } from 'react';
import { Navbar, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand } from 'mdbreact';
import { BrowserRouter as Router, NavLink as LinkReact, Link as ReactLink } from 'react-router-dom';
// import Logo from './newspaper.png'

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
            <Navbar color="mdb-color darken-2" dark expand="md" scrolling>
                {/* <NavbarBrand className="navbar-brand-style" href="/"> */}
                    {/* <img className="newspaper-icon" src="newspaper-icon.png"/> */}
                    {/* Hey, Good News
                </NavbarBrand> */}
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                      <NavItem active={this.props.active === 'home' ? true : false}>
                          <NavLink to="/top-news">Home</NavLink>
                      </NavItem>
                      {/* {(this.state.active === 'Science') ? active : ''} */}
                      <NavItem active={this.props.active === 'science' ? true : false}>
                          <NavLink to="/science">Science</NavLink>
                      </NavItem>
                      <NavItem active={this.props.active === 'sports' ? true : false}>
                          <NavLink to="/sports">Sports</NavLink>
                      </NavItem>
                      <NavItem active={this.props.active === 'business' ? true : false}>
                          <NavLink to="/business">Business</NavLink>
                      </NavItem>
                      <NavItem active={this.props.active === 'entertainment' ? true : false}>
                          <NavLink to="/entertainment">Entertainment</NavLink>
                      </NavItem>
                      <NavItem active={this.props.active === 'health' ? true : false}>
                          <NavLink to="/health">Health</NavLink>
                      </NavItem>
                      <NavItem active={this.props.active === 'technology' ? true : false}>
                          <NavLink to="/technology">Technology</NavLink>
                      </NavItem>
                      <NavItem>
                          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                          <DropdownToggle nav caret>Dropdown</DropdownToggle>
                          <DropdownMenu>
                              <DropdownItem href="#need-some-good-news">Need some good news?</DropdownItem>
                              <DropdownItem href="#">Don't see your article?</DropdownItem>
                              <DropdownItem href="#">Find your tone!</DropdownItem>
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
