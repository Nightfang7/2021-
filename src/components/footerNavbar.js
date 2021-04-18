import React, { Component } from 'react';
import{ MenuItems } from "./Navbar/MenuItems"


class FooterNavbar extends Component {
    state = { clicked: false }

    render() {
        return(
            <nav className="NavbarItems">
                
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}    
                                </a>
                                
                            </li>
                        )
                    })}
                </ul>
        
            </nav>

            
        )
    }
}
export default FooterNavbar
