import React, { Component } from 'react';
import {Input, Button} from 'mdbreact'
import UserToneCollapse from './UserToneCollapse'
import axios from 'axios'

const backendURL = 'http://localhost:8000'

class UserTone extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userInput: '',
      userTone: {},
      loading: false
    }
  }

  getUserInput = (e) => {
    let userInput = e.target.value
    this.setState({
      userInput: userInput,
    })
  }

  getTones = () => {
    this.setState({
      loading: true
    })
    axios.post(`${backendURL}/users`, {userInput: this.state.userInput})
      .then(res => {
        this.setState({
          userTone: res.data,
          loading: false
        })
      })
      .then(() => {
        this.renderCollapse()
      })
      .catch(err => {
        console.log(err);
      })

  }

  render () {
    return (
      <div className="user-tone" id="find-your-tone">
        <h3>Find Your Tone!</h3>
        {/* <p>Wanna find out your overall tone? Enter your twitter handle and we'll scan your tweets for tone and a bonus personality tester!</p> */}
        {/* <TwitterCollapse /> */}
        {/* <Input type="text" placeholder="twitter handle"></Input> */}
        {/* <p>Don't have a twitter account or don't post all that often? No worries! Alternatively copy and paste in a selection of your writing or type up a summary of your life, loves, or whatever! We're not picky! Remember, the more verbose, the more accurate the analyzer.</p> */}
        <p>Want to find your own overall tone? Copy in a sample of your writing and we'll analyze it for you! OR, if you don't have any writing available, type up a summary of your life, loves or whatever. We're not picky! Remember, the more verbose, the more accurate your results.</p>
        <textarea
          className="input"
          rows="10"
          cols="10"
          onChange={this.getUserInput}
        >Your text here...</textarea>
        {!this.state.userTone.anger ? <Button color="mdb-color darken-2" onClick={this.getTones}>Okay, get tones!</Button> : null}
        {this.state.userTone.anger ? <UserToneCollapse userTone={this.state.userTone}/> : null}
        {this.state.loading ? <img src="Loading3.gif"/> : null}
      </div>
    )
  }
}

export default UserTone
