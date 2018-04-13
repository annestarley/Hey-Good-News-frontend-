import React from 'react'
import SignupModal from './SignupModal'

const SignupTab = () => {
  return (
    <div className='signup-tab' id="need-some-good-news">
      <h3>Need some good news?</h3>
      <p>Sign up to recieve a daily 'joyful' news article!</p>
      <SignupModal />
    </div>
  )
}

export default SignupTab
