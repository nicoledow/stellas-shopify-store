export default function manageProducts(state = { products: [] }, action) {
    switch(action.type) {
        case 'START_FETCHING_PRODUCTS':
            return {...state, requesting: true}
        case 'ADD_PRODUCTS':
            return {...state, requesting: false, products: action.products}
        case 'START_ADDING_NEW_PRODUCT':
            return {...state, requesting: true}
        case 'ADD_NEW_PRODUCT':
            return {...state, requesting: false, products: [...state.products, action.productData]}
        case 'START_DELETING_PRODUCT_REQUEST':
            return {...state, requesting: true}
        case 'DELETE_PRODUCT':
            let filteredProducts = state.products.filter(prod => prod.id !== action.id)
            return {...state, products: filteredProducts }
        case 'START_EDIT_BOOK_REQ':
            return {...state, requesting: true}
        default:
            return state;
    }
}