import React from 'react'
import NavbarFeatures from './Navbar'

const Header = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="row">
          <div className="col">
            <img className="newspaper-icon" src="newspaper-icon.png"/>
          </div>
          <div className="col">
            <h1 className="App-title">Hey, <strong>Good News!</strong></h1>
            <p className="subtitle">The news aggregator with news 'tudes'.</p>
          </div>
        </div> */}
        <img className="newspaper-icon animated headShake" src="newspaper-icon.png"/>
        <h1 className="App-title">Hey, <strong>Good News!</strong></h1>
        <p className="subtitle">The news aggregator with news 'tudes'.</p>
        <p className="subsubtitle">View the tone overall tone of a top news article before you decide if you would like to read on.</p>
      </header>
      {/* <div className="top-navbar">
        <NavbarFeatures setSearchParameter={props.setSearchParameter}/>
      </div> */}
    </div>
  );
}

export default Header
