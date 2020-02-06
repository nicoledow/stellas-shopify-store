import React from 'react';

const Product = props => {
    return (
        <div>
            <h2>{props.data.title}</h2>
            <p>{props.data.body_html}</p>
        </div>
    )
}

export default Product;