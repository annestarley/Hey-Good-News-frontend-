
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'mdbreact';
import axios from 'axios'

const backendURL = 'http://localhost:8000'

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: '',
      email: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('togge ran')
    this.setState({
      modal: !this.state.modal
    });
  }

  getUsername = (e) => {
    console.log('username', e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  getEmail = (e) => {
    console.log('email', e.target.value)
    this.setState({
      email: e.target.value
    })
  }

  postUser = () => {
    console.log('post user ran!')
    axios.post(`${backendURL}/userInfo/`, {username: this.state.username, email: this.state.email})
      .then(res => {
        console.log('response from backend', res)
        this.toggle()
      })
      .catch(err => {
        console.log('err from server', err)
      })
  }

  render() {
    return (
      <div>
        <Button color="mdb-color darken-2" onClick={this.toggle}>Yes please!</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Daily Good News Sign Up</ModalHeader>
          <ModalBody>
            <p>Enter your first name and email address and we will send you a daily article where joy is the top tone.</p>
            <Input label="Name" icon="user" className="signup-icon" onChange={this.getUsername}/>
            <Input label="Email address" icon="envelope" className="signup-icon" onChange={this.getEmail}/>
          </ModalBody>
          <ModalFooter>
            <Button color="deep-orange lighten-1" onClick={this.toggle}>Close</Button>{' '}
            {/*<Button color="mdb-color darken-2" onClick={this.toggle} onSubmit={this.postUser}>Save changes</Button>*/}
            <Button color="mdb-color darken-2" onClick={this.postUser}>Save changes</Button>

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
