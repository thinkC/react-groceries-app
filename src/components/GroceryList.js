import React, { Component } from 'react';
import { GroceryConsumer } from '../context';
import GroceryItem from './GroceryItem'

export default class GroceryList extends Component {

    state = {
        searchCategory: ''
    }

    handleChangeSearch = (e) => {
        this.setState({
            searchCategory: e.target.value
        })
        console.log(this.state.searchCategory)
    };





    // callTwoFunctions = (e, value) => {
    //     this.handleChangeSearch(e);
    //     this.searchGrocery(value);
    // }

    render() {


        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <GroceryConsumer>
                                            {value => {
                                                //console.log(value)
                                                //console.log(value.searchGrocery)
                                                const { groceries } = value
                                                //console.log(groceries)
                                                // this.state = {
                                                //     searchCategory: value.searchCategory
                                                // }
                                                // console.log(this.state.searchCategory)


                                                return (
                                                    // <th scope="col"><input type="text" value={value.searchCategory} onChange={(e) => { value.searchGrocery(this.state.searchCategory) }, (e) => { value.updateSearchValue(e, 'searchCategory') }} /> <i className="fas fa-search fa-2x"></i></th>
                                                    //<th scope="col"><input type="text" value={value.searchCategory} onChange={(e) => { value.updateSearchValue(e, 'searchCategory') }} /> <i className="fas fa-search fa-2x"></i></th>
                                                    //<th scope="col"><input type="text" value={this.state.searchCategory} onChange={(e) => { this.callTwoFunctions(this.state.searchCategory) }} /> <i className="fas fa-search fa-2x"></i></th>
                                                    //<th scope="col"><input type="text" value={this.state.searchCategory} onChange={this.handleChangeSearch} /> <button onClick={() => { value.searchGrocery(this.state.searchCategory) }}>Click </button><i className="fas fa-search fa-2x"></i></th>
                                                    <th scope="col"><input type="text" value={value.searchCategory} onChange={value.handleChangeSearch} /> <button onClick={(e) => { value.searchGrocery(e, 'searchCategory') }}>Click </button><i className="fas fa-search fa-2x"></i></th>
                                                    //<th scope="col"><input type="text" value={this.state.searchCategory} onChange={this.handleChangeSearch} /> <button onClick={() => { this.searchGrocery(this.state.searchCategory) }}>Click </button><i className="fas fa-search fa-2x"></i></th>
                                                    //<button onClick={() => { value.searchCategory(this.state.searchCategory) }}}>click</button>
                                                )
                                            }}
                                            {/* <th scope="col"><input type="text" /> <i className="fas fa-search fa-2x"></i></th> */}
                                        </GroceryConsumer>
                                        <th scope="col">Name</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Exp</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <GroceryConsumer>
                                        {(value) => {
                                            console.log(value)
                                            return value.groceries.map(grocery => {
                                                return <GroceryItem key={grocery.id} grocery={grocery} />
                                            })
                                        }}
                                    </GroceryConsumer>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )


    }
}