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
        updateEdit: [],
        searchCategory: ''

    }



    // topItem = () => {
    //     let item = {
    //         title: 'Groceries Inventory | Tracker',
    //         topString: 'Total number of grocery items'
    //     }

    //     return item
    // }

    //dynamically displays values for the header of the application
    headerObj = {
        title: 'Groceries Inventory | Tracker',
        text: 'Total number of grocery items',
        img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
    }



    convertDate = (str) => {
        let date = new Date(str);
        return date.toDateString()
    };


    addGrocery = (grocery) => {
        //let tempGroceries = [...this.state.groceries];
        grocery.id = v4();
        let groceries = [...this.state.groceries, grocery]
        this.setState(() => {
            return { groceries: groceries }
        })
    }

    //returns grocery with id that is clicked
    getGrocery = (id) => {
        const grocery = this.state.groceries.find(grocery => grocery.id === id)
        console.log(grocery)
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
        //console.log(selectedGrocery)
        this.setState({
            id: selectedGrocery['id'],
            name: selectedGrocery['name'],
            qty: selectedGrocery['qty'],
            expiration: selectedGrocery['expiration'],
            image: selectedGrocery['image'],
            category: selectedGrocery['category']
        })
        //console.log(this.state)
    }

    updateSearchValue = (e, value1) => {
        if (value1 === 'searchCategory') {
            //this.state.searchCategory = e.target.value
            this.setState({
                searchCategory: e.target.value
            })
        }
    }

    changeValue = (e, value1) => {
        if (value1 === 'name') {
            this.state.name = e.target.value
            // this.setState({
            //     name: e.target.value
            // })


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
        if (value1 === 'qty') {
            this.state.qty = e.target.value
        }
        if (value1 === 'searchCategory') {
            this.state.searchCategory = e.target.value
        }

        const tempArr = [
            this.state.id,
            this.state.name,
            this.state.image,
            this.state.expiration,
            this.state.qty,
            this.state.category
        ]
        console.log(tempArr)
        this.setState({
            updateEdit: tempArr
        })
        //console.log(this.state)
    }



    onSaveEdit = (id) => {

        if (id !== null) {
            console.log(id)
            const groceriesArr = this.state.groceries; //state not saved or change until saved button is clicked
            console.log(groceriesArr)
            const index = groceriesArr.indexOf(this.getGrocery(id));
            console.log(index)
            const record = groceriesArr[index];
            console.log(record)
            record['name'] = this.state.updateEdit[1];
            record['image'] = this.state.updateEdit[2];
            record['expiration'] = this.state.updateEdit[3];
            record['qty'] = this.state.updateEdit[4];
            record['category'] = this.state.updateEdit[5];
            this.setState({
                groceries: [...this.state.groceries],
                id: '', name: '', image: '', expiration: '', qty: '', category: ''
            })

            console.log(this.state)
            console.log(this.state.updateEdit)

        }
    }





    // searchGrocery = (value) => {
    //     console.log(value)
    //     if (value !== '') {
    //         let catergoryArr = [];
    //         console.log('ok')
    //         let tempGroceries = this.state.groceries;
    //         //let aa = tempGroceries.map(grocery => grocery.category)
    //         // tempGroceries.map((grocery) => {
    //         //     console.log(grocery)
    //         //     if (grocery.category === value) {
    //         //         catergoryArr.push(grocery)
    //         //     }
    //         //     console.log(catergoryArr);
    //         //     this.setState({
    //         //         groceries: catergoryArr
    //         //     })
    //         // })

    //         let bb = tempGroceries.filter((grocery) => grocery.category === value)
    //         console.log(bb)
    //         this.setState({
    //             groceries: bb
    //         })

    //     } else {
    //         this.setState({
    //             groceries: this.state.groceries
    //         })
    //     }

    // }


    searchGrocery = (e, value) => {
        console.log(value)
        // if (value === '') {
        //     return
        // }
        let catergoryArr = [];
        //console.log('ok');

        let oldGroceries = this.state.groceries.map(grocery => {
            return {
                name: grocery.name.toLowerCase(),
                image: grocery.image,
                expiration: grocery.expiration,
                qty: grocery.qty,
                category: grocery.category

            }
        });
        console.log(oldGroceries)
        if (e !== '') {
            let newGroceryList = [];
            // this.setState({
            //     searchCategory: e.target.value
            // })
            //this.state.category = e.target.value;
            this.handleChangeSearch(e)
            newGroceryList = oldGroceries.filter(grocery => {
                grocery.category.includes(this.state.category).toLowerCase()
            });
            this.setState({
                groceries: newGroceryList
            })
        } else {
            this.setState({
                groceries: this.state.groceries
            })
        }


    }

    handleChangeSearch = (e) => {
        this.state.searchCategory = e.target.value
    }

    render() {
        //console.log(this.state.groceries)
        return (
            <GroceryContext.Provider value={{
                ...this.state,
                convertDate: this.convertDate,
                addGrocery: this.addGrocery,
                removeGrocery: this.removeGrocery,
                editGrocery: this.editGrocery,
                onSaveEdit: this.onSaveEdit,
                changeValue: this.changeValue,
                updateSearchValue: this.updateSearchValue,
                searchGrocery: this.searchGrocery,
                handleChangeSearch: this.handleChangeSearch,
                headerObj: this.headerObj
            }}>
                {this.props.children}
            </GroceryContext.Provider>
        )
    }
}

const GroceryConsumer = GroceryContext.Consumer;

export { GroceryProvider, GroceryConsumer } 