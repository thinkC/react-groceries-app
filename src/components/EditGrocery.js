import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { GroceryConsumer } from '../context';
// import { GroceryDB, groceriesDB } from '../data';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default class EditGrocery extends Component {

    render() {

        return (

            <div className="container">
                <GroceryConsumer >
                    {(value) => {
                        //console.log(value)
                        //console.log(value.id)
                        //console.log(value.expiration)
                        return <form >
                            <div className="form-group">
                                <label htmlFor="Name" >Name</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={(e) => { value.updateValue(e, 'name') }}
                                    value={value.name}
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <label htmlFor="Image" >Image</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={(e) => { value.updateValue(e, 'image') }}
                                    value={value.image}
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="Quantity" >Quantity</label>
                                    <input type="text"
                                        onChange={(e) => { value.updateValue(e, 'qty') }}
                                        value={value.qty}
                                        required
                                    />
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="ExpirationDate">Expiration</label>
                                    <DatePicker selected={value.convertDate(value.expiration).selected}

                                        required
                                    />
                                    {/* <DatePicker selected={value.expiration.selected}

                                        required
                                    /> */}

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
                                <label htmlFor="ChemicalName" >Category</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={(e) => { value.updateValue(e, 'category') }}
                                    value={value.category}
                                    required
                                />

                            </div>

                            <div className="form-group center">
                                <button onClick={() => { value.onSaveEdit(value.id) }} type="submit" className="btn btn-primary"><Link to="/">Save</Link></button>
                            </div>

                        </form>


                    }}

                </GroceryConsumer>
            </div>
        )

        // return (
        //     <div className="container">
        //         <GroceryConsumer>
        //             {(value) => (
        //                 <div>
        //                     <form onSubmit={value.onSaveEdit(value.id)}>
        //                         <div className="form-group">
        //                             <label htmlFor="Name" >Name</label>
        //                             <input type="text"
        //                                 className="form-control"
        //                                 onChange={(e) => { value.updateValue(e, 'name') }}
        //                                 value={value.name}
        //                                 required
        //                             />

        //                         </div>
        //                         <div className="form-group">
        //                             <label htmlFor="Image" >Image</label>
        //                             <input type="text"
        //                                 className="form-control"
        //                                 onChange={(e) => { value.updateValue(e, 'image') }}
        //                                 value={value.image}
        //                                 required
        //                             />

        //                         </div>
        //                         <div className="form-group">
        //                             <div className="form-control">
        //                                 <label htmlFor="Quantity" >Quantity</label>
        //                                 <input type="text"
        //                                     onChange={(e) => { value.updateValue(e, 'qty') }}
        //                                     value={value.qty}
        //                                     required
        //                                 />
        //                             </div>
        //                         </div>


        //                         {/* <div className="form-group">
        //                         <div className="form-control">
        //                             <label htmlFor="ExpirationDate">Expiration</label>
        //                             <DatePicker selected={value.convertDate(value.expiration).selected}

        //                                 required
        //                             />
        //                             <DatePicker selected={value.expiration.selected}

        //                                 required
        //                             />

        //                         </div>
        //                     </div> */}


        //                         {/* <div className="form-group">
        //             <label htmlFor="ChemicalName" >Category</label>
        //             <select class="custom-select mr-sm-2" id="">
        //                 <option selected>Choose...</option>
        //                 <option value="1">Vegetable</option>
        //                 <option value="2">Grain</option>
        //                 <option value="3">Milk</option>
        //             </select>

        //         </div> */}

        //                         <div className="form-group">
        //                             <label htmlFor="ChemicalName" >Category</label>
        //                             <input type="text"
        //                                 className="form-control"
        //                                 onChange={(e) => { value.updateValue(e, 'category') }}
        //                                 value={value.category}
        //                                 required
        //                             />

        //                         </div>

        //                         <div className="form-group center">
        //                             <button type="submit" className="btn btn-primary">Edit</button>
        //                         </div>

        //                     </form>
        //                 </div>
        //             )}
        //         </GroceryConsumer>
        //     </div>
        // )
    }
}

