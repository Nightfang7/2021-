import React, { Component } from 'react';
import{ MenuItems } from "./MenuItems"
import './Navbar.css'
import { Link } from "react-router-dom"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <div  className="navbar-logo">
                    <Link to="/">
                        <img className="header-logo" src="https://upload.cc/i1/2021/04/15/HDIKAY.png" alt="" />
                    </Link>
                    
                </div>
                {/* menu-icon目前無法顯示 */}
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}    
                                </a>
                                {/* icon目前沒辦法顯示 */}
                                <a className="icon">
                                    <i className="fas fa-user"></i>
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar