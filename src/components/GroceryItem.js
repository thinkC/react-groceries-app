// import React from 'react';
// import moment from 'moment';
// import { GrocerConsumer } from '../context';


// export default function GroceryItem(props) {

//     const { grocery } = props

//     // console.log(grocery)


//     const convertDate = (str) => {
//         let date = new Date(str),
//             mnth = ("0" + (date.getMonth() + 1)).slice(-2),
//             day = ("0" + date.getDate()).slice(-2);
//         //console.log([date.getFullYear(), mnth, day].join("-"))
//         let covertedDate = [date.getFullYear(), mnth, day].join("-");
//         //let covertedDate = [date.getFullYear(), mnth, day].join("-");
//         return moment(covertedDate, 'YYYYMMDD').fromNow();
//         //return [date.getFullYear(), mnth, day].join("-");
//     };

//     return (
//         <tr>
//             <th scope="row"><img src={grocery.image} className="img-fluid rounded" id="tomato" alt={grocery.name} /></th>
//             <td>{grocery.name}</td>
//             <td>{grocery.qty}</td>
//             {/* <td>{grocery.expiration}</td> */}
//             <td>{convertDate(grocery.expiration)}</td>
//             <td>{grocery.category}</td>
//             <td><span ><i className="fas fa-pen"  ></i></span></td>
//             {/* <td ><span onClick={() => removeGrocery(grocery.id)} ><i className="fas fa-trash"></i></span></td> */}
//             <td ><span  ><i className="fas fa-trash"></i></span></td>
//         </tr>

//     )


// }

import React, { Component } from 'react';
import { GroceryConsumer } from '../context';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class GroceryItem extends Component {

    convertDate = (str) => {
        let date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        //console.log([date.getFullYear(), mnth, day].join("-"))
        let covertedDate = [date.getFullYear(), mnth, day].join("-");
        //let covertedDate = [date.getFullYear(), mnth, day].join("-");
        return moment(covertedDate, 'YYYYMMDD').fromNow();
        //return [date.getFullYear(), mnth, day].join("-");
    };
    render() {
        const { id, name, image, qty, expiration, category } = this.props.grocery;

        return (
            <GroceryConsumer>
                {(value) => (
                    <tr>
                        <th scope="row"><img src={image} className="img-fluid rounded" id="tomato" alt={name} /></th>
                        <td>{name}</td>
                        <td>{qty}</td>
                        {/* <td>{grocery.expiration}</td> */}
                        <td>{this.convertDate(expiration)}</td>
                        <td>{category}</td>
                        <td><Link to={"/edit/" + id}><span onClick={() => { value.editGrocery(id) }} ><i className="fas fa-pen"  ></i></span></Link></td>
                        {/* <td ><span onClick={() => removeGrocery(grocery.id)} ><i className="fas fa-trash"></i></span></td> */}
                        <td ><span onClick={() => { value.removeGrocery(id) }} ><i className="fas fa-trash"></i></span></td>
                    </tr>
                )}

            </GroceryConsumer>
        )
    }
}














