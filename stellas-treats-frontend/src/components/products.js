import React from 'react';
import fetchProducts from '../actions/fetchProducts';
import { connect } from 'react-redux';
import Product from './Product';

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        console.log('component did mount')
        this.props.fetchProducts();
    }

    render() {
    //    debugger;
    //    return <p>products</p>
        if (this.props.products.products) {
            return this.props.products.products.map(prod => <Product data={prod} />)
        } else {
            return <h2>No products yet.</h2>
        }
    }
}

const mapStateToProps = state => {
    return { products: state.products };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);