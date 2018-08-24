import React, { Component } from 'react';
import '../App.css';
  
class ProductRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr><td className={!this.props.inStock ? 'text-red' : null}>{this.props.name}</td> <td> {this.props.price} </td> </tr>
        );
    } 
}

export default ProductRow;
