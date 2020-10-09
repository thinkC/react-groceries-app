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
        //let tempGroceries = [...this.state.groceries];
        grocery.id = v4();
        let groceries = [...this.state.groceries, grocery]
        this.setState(() => {
            return { groceries: groceries }
        })
    }

    //resturn grocery with id that is clicked
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
            this.state.searchCategory = e.target.value
        }
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
        console.log(this.state)
    }



    onSaveEdit = (id) => {

        if (id !== null) {
            console.log(id)
            const savedRecord = this.state.groceries; //state not saved or change until saved button is clicked
            console.log(savedRecord)
            const index = savedRecord.indexOf(this.getGrocery(id));
            const record = savedRecord[index];
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


        //let tempGroceries = this.state.groceries;


        // let bb = this.state.groceries.filter((grocery) => grocery.category === value)
        // console.log(bb)
        // let cc = this.state.groceries.filter(grocery => {
        //     return grocery.category === value
        // })
        // this.setState({
        //     groceries: cc
        // })

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
                updateValue: this.updateValue,
                updateSearchValue: this.updateSearchValue,
                searchGrocery: this.searchGrocery,
                handleChangeSearch: this.handleChangeSearch
            }}>
                {this.props.children}
            </GroceryContext.Provider>
        )
    }
}

const GroceryConsumer = GroceryContext.Consumer;

export { GroceryProvider, GroceryConsumer } 