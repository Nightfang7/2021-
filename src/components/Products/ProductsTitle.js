import React, { Component } from 'react';
import { ProductTitle } from "./ProductItems"

// export default function ProductTitle({ title }) {

// }

class Product extends Component {
    render() {
        return (
            <>
                {ProductTitle.map((item, index) => {
                   return (
                        <section key={index}>
                            <h1>
                                {item.title}
                            </h1>
                        </section>
                   )
                })}
                {/* <h1 className="product-title">{title}</h1> */}
            </>
        )
    }
}

export default Product