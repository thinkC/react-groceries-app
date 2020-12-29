import React, { Component } from 'react';
import { GroceryConsumer } from '../context';
import GroceryItem from './GroceryItem'

export default class GroceryList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"><input type="text" /> <button >Click </button></th>
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