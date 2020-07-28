

// import React from 'react';
// import GroceryItem from './GroceryItem'

// export default function GroceryList(props) {
//     const { groceries, removeGrocery } = props;
//     console.log(props)
//     return groceries.length ? (
//         <div className="container">

//             <div className="row">

//                 <div className="col-md-12 col-lg-12">
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th scope="col"><input type="text" /> <i className="fas fa-search fa-2x"></i></th>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">Qty</th>
//                                 <th scope="col">Exp</th>
//                                 <th scope="col">Category</th>
//                                 <th scope="col">Edit</th>
//                                 <th scope="col">Delete</th>
//                             </tr>
//                         </thead>

//                         <tbody>

//                             {groceries.map(grocery => {
//                                 return <GroceryItem grocery={grocery} key={grocery.id} removeGrocery={removeGrocery} />
//                             })}

//                         </tbody>

//                     </table>
//                     {/* <button onClick={clearGroceries} className="btn btn-success">Clear All</button> */}
//                 </div>
//             </div>





//         </div>
//     ) : (

//             <div>No groceries</div>
//         )
//     // return (
//     //     <div>
//     //         <h1>from groceryList</h1>
//     //     </div>
//     // )
// }


import React, { Component } from 'react';
import { GroceryProvider, GroceryConsumer } from '../context';
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
                                        <th scope="col"><input type="text" /> <i className="fas fa-search fa-2x"></i></th>
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