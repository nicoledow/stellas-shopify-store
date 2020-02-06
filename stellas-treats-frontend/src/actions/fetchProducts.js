const fetchProducts = () => {
    console.log('in fetch products');
    return (dispatch) => {
        console.log('going to start fetching prods')
        dispatch({ type: 'START_FETCHING_PRODUCTS'});
        fetch('http://localhost:3000/products')
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: 'ADD_PRODUCTS', products: data })
            })
    }
}

export default fetchProducts;