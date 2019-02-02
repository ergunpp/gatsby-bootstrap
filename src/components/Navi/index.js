import React, {Component} from 'react'
import { Link } from 'gatsby'
import "./style.scss"
import Icon from 'components/Icon'


 

class Navi extends React.Component {
  
        constructor(props) {
        super(props);
        this.state = {
          windowWidth: 1081,
          mobileNavVisible: false
        };
        }
        
  handleResize() {
  this.setState({windowWidth: window.innerWidth});
}

  componentDidMount() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth<this.state.windowWidth){this.handleResize()}
    window.addEventListener('resize', this.handleResize.bind(this));
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
    window.removeEventListener('resize', this.handleResize.bind(this));
    }
  } 

  navigationLinks(){
    const {location, title} =this.props
    return(
      <ul className=
      {this.state.mobileNavVisible ? "navbar-nav mr-auto mt-2 mt-md-0" :"navbar-nav bd-navbar-nav"}
      >
                  <li
                    className={
                      location.pathname === '/' ? 'nav-item active' : 'nav-item'
                    }
                  >
                    <Link to="/" className="nav-link">
                      Anasayfa
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/kedi/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/kedi/" className="nav-link">
                      Kedi
                    </Link>
                    
                  </li>
                  <li
                    className={
                      location.pathname === '/kopek/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/kopek/" className="nav-link">
                      Köpek
                    </Link>
                    
                  </li>
                   <li
                    className={
                      location.pathname === '/contact/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/contact/" className="nav-link">
                      İletişim
                    </Link>
                    
                  </li>
                </ul>
      
      )
    
  }
  
  renderMobileNav() {
      if(this.state.mobileNavVisible) {
        return this.navigationLinks();
      }
    }
    
  handleNavClick() {
      if(!this.state.mobileNavVisible) {
        this.setState({mobileNavVisible: true});
      } else {
        this.setState({mobileNavVisible: false});
      }
    }
    
  renderNavigation() {
      if(this.state.windowWidth <= 1080) {
        return [
           <nav className="navbar navbar-expand-sm navbar-light flex-md-row white-bg sticky-top bg-light">
              <div className="container">
                  <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                      <img src="/img/main-logo-2.png" style={{height:"50px"}} className="align-center" alt="Bestpet Logo" />
                    </Link>
                  
                   <button className="navbar-toggle menu-button" onClick={this.handleNavClick.bind(this)}><span className="menu-icon"><Icon name="bars" prefix="fas"></Icon></span></button>
                  
                  </div>
                <div className="navbar navbar-collapse">
                     {this.renderMobileNav()}
                </div>
              </div>
          </nav>
        ];
      } else {
        return [
          <nav className="navbar navbar-expand navbar-light flex-column flex-md-row white-bg sticky-top navbar-expand-md bg-light">
            <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                      <img src="/img/main-logo-2.png" style={{height:"50px"}} className="align-center" alt="Bestpet Logo" />
                    </Link>
            
                 </div>
                  <div className="navbar-nav-scroll ml-auto">
                    
                       {this.navigationLinks()}
                    
                  </div>
            </div>
          </nav>
        ]; 
      }
    }
  
  
  render() {
  return(
   
              this.renderNavigation()
         
  )
}
}

export default Navi
