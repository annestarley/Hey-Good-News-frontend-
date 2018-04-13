
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'mdbreact';

let validator = require('email-validator')

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleClose() {
    this.toggle()
  }

  toggleSaveChanges() {
    this.toggle()
  }

  render() {
    return (
      <div>
        <Button color="mdb-color darken-2" onClick={this.toggle}>Yes, please!</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Daily Good News Sign Up</ModalHeader>
          <ModalBody>
            <p>Enter your first name and email address and we will send you a daily article where joy is the top tone.</p>
            <Input label="Example label" icon="user" className="signup-icon"/>
            <Input label="Example label" icon="envelope" className="signup-icon"/>
          </ModalBody>
          <ModalFooter>
            <Button color="deep-orange lighten-1" onClick={this.toggleClose}>Close</Button>{' '}
            <Button color="mdb-color darken-2" onClick={this.toggleSaveChanges}>Save changes</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
