import React, { Component } from 'react';
import { KindItems } from "./KindItems"

class KindBar extends Component {
    render() {
        return (
            <nav className="KindbarItems">
                <ul className="kind-menu">
                    {KindItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <img src={item.image} alt={item.title}/> 
                                </a>
                            </li>
                        )
                    })}

                </ul>

            </nav>
        )
    }
}
export default KindBar