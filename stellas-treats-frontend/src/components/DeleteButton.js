import React from 'react';
import { connect } from 'react-redux';
import deleteProduct from '../actions/deleteProduct';

class EditButton extends React.Component {

    handleClick = () => {
        this.props.deleteProduct(this.props.id)
    }

    render() {
        return <button onClick={this.handleClick}>deleteProduct</button>
    }
}


export default connect(null, { deleteProduct })(EditButton);