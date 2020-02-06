import React from 'react';
import postProduct from '../actions/postProduct';
import { connect } from 'react-redux';

class NewProductForm extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            productTitle: e.target.querySelector('input[name="productTitle"]').value,
            productDescription: e.target.querySelector('input[name="productDescription"]').value,
            productTags: e.target.querySelector('input[name="productTags"]').value
        }
        this.props.postProduct(data);
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label for="productTitle"> Product Title:
                    <input type="text" name="productTitle" />
                </label> <br />
                <label for="body_html"> Product Description:
                    <input type="text" name="productDescription" />
                </label> <br/>
                <label for="tags"> Product Tags:
                    <input type="text" name="productTags" />
                </label> <br/>
                <input type="submit" />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postProduct: (data) => dispatch(postProduct(data))
    }
}

export default connect(null, mapDispatchToProps)(NewProductForm);