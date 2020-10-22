import React from 'react';
import { GroceryConsumer } from '../context';
import { useLocation, Link } from 'react-router-dom';


function Top() {
    //console.log(groceriesDB)
    let location = useLocation();
    //console.log(location.pathname)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-lg-8" id="banner">
                    <GroceryConsumer>
                        {(value) => {
                            return (
                                <img src={value.headerObj.img} alt="groceries" />
                            )
                        }}

                    </GroceryConsumer>
                </div>
                <div className="col-md-4 col-lg-4">

                    <GroceryConsumer>
                        {(value) => {
                            return (

                                <div>
                                    <h1 className="mt-3">
                                        {value.headerObj.title}
                                    </h1>
                                    <h5><i>{value.headerObj.text} - {value.groceries.length}</i></h5>
                                    <button className="btn btn-lg btn-success mt-5">
                                        {location.pathname === '/' ? <Link to="/add">Add Grocery</Link> : <Link to="/">Home</Link>}
                                    </button>
                                </div>
                            )
                        }}

                    </GroceryConsumer>
                </div>
            </div>
        </div>
    )
}

export default Top




// import React from 'react';
// import { GroceryConsumer } from '../context';
// import { useLocation, Link } from 'react-router-dom';


// function Top() {
//     //console.log(groceriesDB)
//     let location = useLocation();
//     //console.log(location.pathname)
//     return (
//         <div className="container">
//             <div className="row">
//                 <GroceryConsumer>
//                     {(value)=>{
//                         return(
//                             <div className="col-md-8 col-lg-8" id="banner">
//                     <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" alt="groceries" />

//                 </div>
//                 <div className="col-md-4 col-lg-4">
//                     <h1 className="mt-3">Groceries Inventory | Tracker</h1>



//                                 <div>
//                                     <h5><i>Total number of grocery items - {value.groceries.length}</i></h5>
//                                     <button className="btn btn-lg btn-success mt-5">
//                                         {location.pathname === '/' ? <Link to="/add">Add Grocery</Link> : <Link to="/">Home</Link>}
//                                     </button>
//                                 </div>



//                 </div>
//                         )
//                     }}

//                 </GroceryConsumer>
//             </div>
//         </div>
//     )
// }

// export default Top

