const deleteProduct = id => {
    return (dispatch) => {
        dispatch({ type: 'START_DELETING_PRODUCT_REQUEST' })
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ "id": id })
        })
        .then(response => {
            return response.json();
        })
        .then(() => {
            dispatch({ type: 'DELETE_PRODUCT', id })
        })
        .catch(err => console.log('error in delete request', err));
    }
};

export default deleteProduct;