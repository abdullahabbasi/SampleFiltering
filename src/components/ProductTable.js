import React, { Component } from 'react';
import '../App.css';
import ProductRow from './ProductRow';
import ProductCategory from './ProductCategory';

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
 
  
class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inStock: false,
          };
      
        this.handleInstockChange = this.handleInstockChange.bind(this);
    }
    handleInstockChange(e) {
        this.setState({inStock: e.target.checked});
        
    }
    render() {
        console.log('render table ', this.props);
        let rows = [];
        let lastCategory = null;
        PRODUCTS.forEach((product, index) => {
            console.log('product ', product, lastCategory);
            if (product.category !== lastCategory) {
                rows.push(<ProductCategory category={product.category}/>) 
            }
            if (this.props.inStock) {
                if (product.stocked) {
                    rows.push(<ProductRow key={index} inStock={product.stocked} name={product.name} price={product.price} />)
                }   
            } else {
                rows.push(<ProductRow key={index} inStock={product.stocked} name={product.name} price={product.price} />)
            }
            lastCategory = product.category;
        })
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th> 
                </tr>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    } 
}

export default ProductTable;
