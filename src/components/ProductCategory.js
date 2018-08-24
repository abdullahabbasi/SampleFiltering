import React, { Component } from 'react';
import '../App.css';
  
class ProductCategory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr><td colSpan="2">{this.props.category}</td></tr>
        );
    } 
}

export default ProductCategory;
