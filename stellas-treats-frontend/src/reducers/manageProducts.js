export default function manageProducts(state = { products: [] }, action) {
    switch(action.type) {
        case 'START_FETCHING_PRODUCTS':
            return {...state, requesting: true}
        case 'ADD_PRODUCTS':
            //debugger;
            return {...state, requesting: false, products: action.products}
        default:
            return state;
    }
}