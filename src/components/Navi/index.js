import React from 'react'
import { Link } from 'gatsby'
import "./style.scss"

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      
      <nav className="navbar navbar-expand navbar-light flex-column flex-md-row white-bg sticky-top">
        <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
            
            <img src="./img/main-logo.png"  className="align-center" alt="" />
   
  
          </Link>
    </div>
        
          
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/profile/" className="nav-link">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
      
    )
  }
}

export default Navi
