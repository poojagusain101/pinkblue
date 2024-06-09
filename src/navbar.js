import React from 'react'
import './css/navbar.css'
import { Component } from 'react';
import { MenuItems } from './MenuItems';
import{ Link }from 'react-router-dom';

class Navbar extends Component{


  state={clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }

  handleLinkClick = () => {
    this.setState({ clicked: false });
  }

  render() {
    const { isAuth, signUserOut } = this.props;
    return (
      <nav className='NavbarItems'>
       <Link to="/"> <h1 className="navbar-logo"><h1 className='pink'>Pink</h1> <h1 className='blue'>Blue</h1></h1></Link>

        <div className="menu-icons" onClick={this.handleClick}>
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url} onClick={this.handleLinkClick}> {item.title}</Link>
              </li>
            )
          })}
          <li>
          {(!isAuth)? <Link className='nav-links-mobile' to="/login" onClick={this.handleLinkClick}>
            Sign In
         </Link>:
            <button className='nav-links-mobile' onClick={signUserOut}>
            Sign Out
          </button>}
          </li>

        {(!isAuth)? <Link to="/login"><button className='nav-btn'>
            Sign In
          </button></Link>:
            <button className='nav-btn' onClick={signUserOut}>
            Sign Out
          </button>}
        </ul>
      </nav>
    )
  }
}


export default Navbar
