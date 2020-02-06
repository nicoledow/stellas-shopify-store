const postProduct = data => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_NEW_PRODUCT' });
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json();
        })
        .then(productData => {
            dispatch({ type: 'ADD_NEW_PRODUCT', product: productData })
        })
        .catch(err => console.log('error posting product', err));
    }
}

export default postProduct;