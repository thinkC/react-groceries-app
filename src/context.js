import React, { Component, createContext } from 'react';
import { groceriesDB } from './data';
// import moment from 'moment';
import { v4 } from 'uuid';


const GroceryContext = createContext();
class GroceryProvider extends Component {
    state = {
        groceries: groceriesDB,
        id: '',
        name: '',
        qty: '',
        expiration: new Date(),
        category: '',
        image: '',
        updateEdit: []
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
        let tempGroceries = this.state.groceries;
        const index = tempGroceries.indexOf(this.getGrocery(id));
        const selectedGrocery = tempGroceries[index];
        this.setState({
            id: selectedGrocery['id'],
            name: selectedGrocery['name'],
            qty: selectedGrocery['qty'],
            expiration: selectedGrocery['expiration'],
            image: selectedGrocery['image'],
            category: selectedGrocery['category']
        })
    }

    updateValue = (e, value1) => {
        if (value1 === 'name') {
            this.state.name = e.target.value
        }
        if (value1 === 'image') {
            this.state.image = e.target.value
        }
        if (value1 === 'expiration') {
            this.state.expiration = e.target.value
        }
        if (value1 === 'category') {
            this.state.category = e.target.value
        }
        const tempArr = [
            this.state.id,
            this.state.name,
            this.state.image,
            this.state.expiration,
            this.state.qty,
            this.state.category
        ]
        this.setState({
            updateEdit: tempArr
        })

    }

    onSaveEdit = (id) => {
        if (id !== '') {
            const savedRecord = this.state.groceries;
            const index = savedRecord.indexOf(this.getGrocery(id));
            const record = savedRecord[index];
            record['name'] = this.state.updateEdit[0];
            record['image'] = this.state.updateEdit[1];
            record['expiration'] = this.state.updateEdit[2];
            record['qty'] = this.state.updateEdit[3];
            record['category'] = this.state.updateEdit[4];
            this.setState({
                groceries: [...this.state.groceries],
                id: '', name: '', image: '', expiration: '', qty: '', category: ''
            })
        }
        console.log(this.state)
        this.props.history.push('/')
    }



    render() {
        console.log(this.state.groceries)
        return (
            <GroceryContext.Provider value={{
                ...this.state,
                convertDate: this.convertDate,
                addGrocery: this.addGrocery,
                removeGrocery: this.removeGrocery,
                editGrocery: this.editGrocery,
                onSaveEdit: this.onSaveEdit,
                updateValue: this.updateValue
            }}>
                {this.props.children}
            </GroceryContext.Provider>
        )
    }
}

const GroceryConsumer = GroceryContext.Consumer;

export { GroceryProvider, GroceryConsumer } 