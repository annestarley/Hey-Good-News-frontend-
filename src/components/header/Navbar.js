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
            dropdownOpen: false,
            active: 'top-news'
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

    getActive = (e) => {
      debugger
      console.log(e.target.innerText)
      this.setState({
        active: e.target.innerText
      })
    }

    render() {
        console.log('active', this.state.active)
        return (
          <div>
            <Navbar color="mdb-color darken-2" dark expand="md" scrolling>
                {/* <NavbarBrand href="/">
                    <img className="newspaper-icon" src="newspaper-icon.png"/>
                </NavbarBrand> */}
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                      <NavItem active={this.props.active === 'top-news' ? true : false}>
                          <NavLink onClick={this.getActive} to="/top-news">Home</NavLink>
                      </NavItem>
                      {/* {(this.state.active === 'Science') ? active : ''} */}
                      <NavItem active={this.props.active === 'science' ? true : false}>
                          <NavLink to="/science" onClick={this.getActive}>Science</NavLink>
                      </NavItem>
                      <NavItem active={this.props.active === 'sports' ? true : false}>
                          <NavLink to="/sports" onClick={this.getActive}>Sports</NavLink>
                      </NavItem>
                      <NavItem active={this.props.active === 'business' ? true : false}>
                          <NavLink to="/business" onClick={this.getActive}>Business</NavLink>
                      </NavItem>
                      <NavItem active={this.props.active === 'entertainment' ? true : false}>
                          <NavLink to="/entertainment" onClick={this.getActive}>Entertainment</NavLink>
                      </NavItem>
                      <NavItem active={this.props.active === 'health' ? true : false}>
                          <NavLink to="/health" onClick={this.getActive}>Health</NavLink>
                      </NavItem>
                      <NavItem active={this.props.active === 'technology' ? true : false}>
                          <NavLink to="/technology" onClick={this.getActive}>Technology</NavLink>
                      </NavItem>
                      <NavItem>
                          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                          <DropdownToggle nav caret>Dropdown</DropdownToggle>
                          <DropdownMenu>
                              <DropdownItem href="#">Need some good news?</DropdownItem>
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
