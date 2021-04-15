import React, { Component } from 'react';
import{ MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <div className="navbar-logo">
                    <img className="header-logo" src="https://upload.cc/i1/2021/04/15/HDIKAY.png" alt=""></img>
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
                                    <i class="fas fa-user"></i>
                                    <i class="fas fa-shopping-cart"></i>
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