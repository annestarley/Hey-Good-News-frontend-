import React from 'react'
import {Input} from 'mdbreact'
import UserToneCollapse from './UserToneCollapse'
import TwitterCollapse from './TwitterCollapse'
import UserInfoCollapse from './UserInfoCollapse'

const UserTone = () => {
  return (
    <div className="user-tone">
      <h3>Find Your Tone!</h3>
      <p>Wanna find out your overall tone? Enter your twitter handle and we'll scan your tweets for tone and a bonus personality tester!</p>
      {/* <TwitterCollapse /> */}
      <Input type="text" placeholder="twitter handle"></Input>
      <p>Don't have a twitter account or don't post all that often? No worries! Alternatively copy and paste in a selection of your writing or type up a summary of your life, loves, or whatever! We're not picky! Remember, the more verbose, the more accurate the analyzer.</p>
      <textarea className="input" rows="10" cols="10">Some text here</textarea>
      {/* <UserInfoCollapse /> */}
      {/* <UserToneCollapse /> */}
    </div>
  )
}

export default UserTone
