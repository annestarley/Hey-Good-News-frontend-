import React from 'react'
import NavbarFeatures from './Navbar'

const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Hey, <strong>Good News!</strong></h1>
        <p className="subtitle">The news aggregator with news tudes.</p>
        <p className="subsubtitle">View the tone overall tone of a top news article before you decide if you would like to read on.</p>
      </header>
      <NavbarFeatures />
    </div>
  );
}

export default Header
