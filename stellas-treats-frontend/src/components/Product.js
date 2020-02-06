import React from 'react';
import DeleteButton from './DeleteButton';

const Product = props => {
    console.log('product props', props)
    return (
        <div>
            <h2>{props.data.title}</h2>
            <p>{props.data.body_html}</p>
            <DeleteButton id={props.data.id} />
        </div>
    )
}

export default Product;