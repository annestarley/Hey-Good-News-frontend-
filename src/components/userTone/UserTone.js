import React from 'react'
import {Input} from 'mdbreact'

const UserTone = () => {
  return (
    <div className="user-tone">
      <h3>Find Your Tone!</h3>
      <p>Wanna find out your overall tone? Enter your twitter handle and we'll scan your tweets for tone and a bonus personality tester!</p>
      <Input type="text" placeholder="twitter handle"></Input>
      <p>Don't have a twitter account or don't post all that often? No worries! Alternatively copy and paste in a selection of your writing or type up a summary of your life, loves, or whatever! We're not picky! Remember, the more verbose, the more accurate the analyzer.</p>
      <input type="text" placeholder="Your text"></input>
    </div>
  )
}

export default UserTone
