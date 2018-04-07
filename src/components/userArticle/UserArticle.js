import React from 'react'
import {Input} from 'mdbreact'

const UserArticle = () => {
  return (
    <div className="user-article">
      <h3>Don't see the article you are interested in?</h3>
      <p>Enter the URL for your own article to see it's tone.</p>
      <Input type="text" placeholder="Your text..."></Input>
    </div>
  )
}

export default UserArticle
