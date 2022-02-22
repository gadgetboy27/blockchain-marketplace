
import React, { Component } from 'react';


class Navbar extends Component {
  
    render() {
      return (
        <div id='content'>
          <header>
            <div className="bg-dark collapse bg-dark" id="navbarHeader">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-md-7 py-4">
                    <h4 className="text-white">About</h4>
                    <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                    <h4 className="text-white">Contact</h4>
                    <ul className="list-unstyled">
                        <li><a href="/" className="text-white">Follow on Twitter</a></li>
                        <li><a href="/" className="text-white">Like on Facebook</a></li>
                        <li><a href="/" className="text-white">Email me</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
              <div className="container">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" 
                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
                    strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle 
                      cx="12" cy="13" r="4"/></svg>
                    <strong>Web3 Marketplace</strong>
                </a>
                <ul className='navbar-nav px3'>
                  <li className='nav-item text-now-wrap d-none d-sm d-sm-block'>
                    <small className='text-white'><span id='account'>
                      Your Account - {this.props.account} </span>
                    </small>
                    {/* <button className="navbar-toggler collapsed" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarHeader" 
                    aria-controls="navbarHeader" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> */}
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
        )
    }
}
  
  export default Navbar;