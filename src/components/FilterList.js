import React, { Component } from 'react';
import '../App.css';
import ProductTable from './ProductTable';
import { connect } from 'react-redux';
import { searchTextfn } from '../actions';

class FilterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inStock: false,
          };
      
        this.handleInstockChange = this.handleInstockChange.bind(this);
    }
    handleInstockChange(e) {
        this.setState({inStock: e.target.checked});
        this.props.searchTextfn('ABD');
        
    }
    render() {
        console.log('state ', this.props);
        return (
        <div className="App">
            <form>
                <input type="text" placeholder="search..." />
                <br/>
                <br/>
                <br/>
                <label>
                onnly show products in stock {'   '}
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.inStock}
                    onChange={this.handleInstockChange} />
                </label>
                <ProductTable  inStock={this.state.inStock}/>

            </form>
        </div>
        );
    } 
}

const mapStateToProps = state => {
    return {
      searchText: state.serachText
    }
  }
  

  export default connect(
    mapStateToProps,
    { searchTextfn }
  )(FilterList);
