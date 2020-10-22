import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Top from './components/Top';
import GroceryList from './components/GroceryList';
import AddGrocery from './components/AddGrocery';
import EditGrocery from './components/EditGrocery';
import './App.css';


class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Top />
        <Switch>
          <Route exact path="/" component={GroceryList} />
          <Route path="/add" component={AddGrocery} />
          <Route path="/edit/:id" component={EditGrocery} />
        </Switch>

      </React.Fragment>
    )
  }
}


export default App;