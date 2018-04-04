import React from 'react'
import NavbarFeatures from './Navbar'

const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Hey, Good News!</h1>
        <p>View the tone of your news before you dive into an article.</p>
      </header>
      <NavbarFeatures />
    </div>
  );
}

export default Header
