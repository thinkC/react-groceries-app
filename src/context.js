import React, { Component, createContext } from 'react';
import { groceriesDB } from './data';
// import moment from 'moment';
import { v4 } from 'uuid';


const GroceryContext = createContext();
class GroceryProvider extends Component {
    state = {
        groceries: groceriesDB
    }


    // convertDate = (str) => {
    //     let date = new Date(str),
    //         mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    //         day = ("0" + date.getDate()).slice(-2);
    //     //console.log([date.getFullYear(), mnth, day].join("-"))
    //     let covertedDate = [date.getFullYear(), mnth, day].join("-");
    //     //let covertedDate = [date.getFullYear(), mnth, day].join("-");
    //     return moment(covertedDate, 'YYYYMMDD').fromNow();
    //     //return [date.getFullYear(), mnth, day].join("-");
    // };


    convertDate = (str) => {
        let date = new Date(str);
        return date.toDateString()
    };

    // addGrocery = (name, image, expiration, qty, category) => {
    //     let tempGroceries = [...this.state.groceries];
    //     let singleGrocery = { image: image, name: name, qty: qty, expiration: expiration, category: category, id: v4() };
    //     this.setState(() => {
    //         return { groceries: [tempGroceries, singleGrocery] }
    //     })
    // }

    addGrocery = (grocery) => {
        let tempGroceries = [...this.state.groceries];
        grocery.id = v4()
        let groceries = [...this.state.groceries, grocery]
        this.setState(() => {
            return { groceries: groceries }
        })
    }

    getGrocery = (id) => {
        const grocery = this.state.groceries.find(grocery => grocery.id === id)
        return grocery;
    }

    removeGrocery = (id) => {
        let tempGroceries = [...this.state.groceries];
        tempGroceries = tempGroceries.filter(grocery => grocery.id !== id);
        //const index = groceriesDB.indexOf(this.getGrocery(id))
        this.setState(() => {
            return {
                groceries: [...tempGroceries]
            }
        })
    }

    editGrocery = (id) => {
        console.log(id)
    }



    render() {
        console.log(this.state.groceries)
        return (
            <GroceryContext.Provider value={{
                ...this.state,
                convertDate: this.convertDate,
                addGrocery: this.addGrocery,
                removeGrocery: this.removeGrocery,
                editGrocery: this.editGrocery
            }}>
                {this.props.children}
            </GroceryContext.Provider>
        )
    }
}

const GroceryConsumer = GroceryContext.Consumer;

export { GroceryProvider, GroceryConsumer } 