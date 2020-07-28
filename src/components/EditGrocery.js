import React, { Component } from 'react';
import axios from 'axios';
import { GroceryConsumer } from '../context';
import { GroceryDB, groceriesDB } from '../data';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default class EditGrocery extends Component {

    state = {
        name: '',
        image: '',
        category: '',
        expiration: new Date(),
        qty: ''
    }


    // componentDidMount() {
    //     this.setGroceries()
    // }

    //     setGroceries = () => {
    //         let tempGroceries = [];
    //         groceriesDB.forEach(item=>{
    //             const singleItem = [...item];
    //             tempGroceries = [...tempGroceries, singleItem]
    //         })
    //         this.setState(()=>{

    //         })

    //     // return <GroceryConsumer>
    //     //     {(value) => {
    //     //         console.log(value)
    //     //     }}
    //     // </GroceryConsumer>

    // }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeImage = (e) => {
        this.setState({
            image: e.target.value
        })
    }

    handleChangeCategory = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    handleChangeExpiration = (e) => {
        this.setState({
            expiration: e.target.value
        })
    }

    handleChangeQty = (e) => {
        this.setState({
            qty: e.target.value
        })
    }


    render() {

        return (

            <div className="container">
                <GroceryConsumer >
                    {(value) => {
                        //console.log(value)
                        //console.log(this.props)
                        this.handleSubmit = (e) => {
                            e.preventDefault();
                            value.editGrocery(this.state)

                            this.props.history.push('/')
                        }
                        // value.convertDate(1595886543865)
                        return <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="Name" >Name</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={this.handleChangeName}
                                    value={this.state.name}
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <label htmlFor="Image" >Image</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={this.handleChangeImage}
                                    value={this.state.image}
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="Quantity" >Quantity</label>
                                    <input type="number"
                                        onChange={this.handleChangeQty}
                                        value={this.state.qty}
                                        required
                                    />
                                </div>
                            </div>


                            {/* <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="ExpirationDate">Expiration</label>
                                    <DatePicker selected={value.convertDate(value.groceries.expiration).selected}

                                        required
                                    />

                                </div>
                            </div> */}
                            {/* <div className="form-group">
                    <label htmlFor="ChemicalName" >Category</label>
                    <select class="custom-select mr-sm-2" id="">
                        <option selected>Choose...</option>
                        <option value="1">Vegetable</option>
                        <option value="2">Grain</option>
                        <option value="3">Milk</option>
                    </select>

                </div> */}

                            <div className="form-group">
                                <label htmlFor="ChemicalName" >Category</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={this.handleChangeCategory}
                                    value={this.state.category}
                                    required
                                />

                            </div>

                            <div className="form-group center">
                                <button type="submit" className="btn btn-primary">Edit</button>
                            </div>

                        </form>


                    }}

                </GroceryConsumer>
            </div>
        )
    }
}

