import React, { Component } from 'react';
import { ProductSider } from "./ProductItems"

class Product extends Component {
    render() {
        return (
            <nav className="Productsider">
                <ul className="sider-menu">
                    {ProductSider.map((item, index) => {
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

export default Product