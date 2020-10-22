import React, { Component } from 'react';
import { GroceryConsumer } from '../context';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class AddGrocery extends Component {

    state = {
        name: '',
        image: '',
        category: '',
        expiration: new Date(),
        qty: ''
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
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

    handleChangeExpiration = (date) => {
        this.setState({
            expiration: date
        })
        console.log(this.state.expiration)
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
                            value.addGrocery(this.state)
                            this.setState({
                                name: '',
                                image: '',
                                qty: '',
                                category: '',
                                expiration: new Date()
                            })
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


                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="ExpirationDate">Expiration</label>

                                    <DatePicker selected={this.state.expiration} required onChange={this.handleChangeExpiration} />

                                </div>
                            </div>
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
                                <label htmlFor="Category" >Category</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={this.handleChangeCategory}
                                    value={this.state.category}
                                    required
                                />

                            </div>

                            <div className="form-group center">
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>

                        </form>


                    }}

                </GroceryConsumer>
            </div>
        )
    }
}
