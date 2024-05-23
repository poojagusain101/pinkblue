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
  render() {
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
                <Link className={item.cName} to={item.url}> {item.title}</Link>
              </li>
            )
          })}
         <Link to="/login"><button className='nav-btn'>
            Sign In
          </button></Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar
