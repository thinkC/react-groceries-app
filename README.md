# Grocery Inventory Tracker

This is a Single Page Application (SPA) built using React and context api; with this app you will be able to Grocery Inventory Store that tracks expiration and quantity. We will be able to create, read, update and delete items created.

## Setup

We will use `npx create react app` , this helps us to quickly setup our developement environment . We will need to have Node greater or equal to 8.10 and our npm should be greater than or equal to 5.6 installed on our machine.

### Installation 

I will be using vscode as my code editor, but we are free to use any code editor.
To start, we open the command line and cd to where we want to have our app installed, then installation we do

```javascript
npx create-react-app grocery-inventory-tracker
```

This creates a boiler plate we can start using for our app. 

For this project we will be using react state and  react context api. 
React Context Api helps us to create a global variable that can be passed around in our react App. Usually data is passed down from parent to child in a typical react app as _props_ . You can read more on [React Context API](https://reactjs.org/docs/context.html) .

## Folder Structure
We create __components__ subfolder in _src_ . In the _components_ folder we create the following files, _AddGrocery.js_, _EditGrocery.js_, _GroceryItem.js_, _GroceryList.js_, _Navbar.js_ .
We also create two other files in the root folder. These are _data.js_ that will host all our grocery objects and a _context.js_ .

![Folder Tree Structure](public/tree-structure.PNG)

## Dependencies

For this app we will require and install the following dependencies

```javascript
npm install --save react-router-dom uuid moment react-datepicker
```
* react-router-dom - This helps with client-side routing in a Single Page App that allows for navigation without page refreshing.
* uuid - They are 128-Bits unique numbers and we will use this to generate unique id's for our application.
* moment - We will use this to display data/time in friendly and easy way.
* react-datepicker - We will use this to display dates using calendar dialog.

## index.html

In our _index.html file we will have two cdn links for fontawesom icons and we use bootstrap for styling and rename the title tag as blow. Notice that we have a div with _id_ root . This is where our app will be displayed.

```html
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <!--font awesome-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></script>

  <!-- bootstrap -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  <title>Grocery Inventory Tracking App</title>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>

</body>

</html>
  ```


## index.js