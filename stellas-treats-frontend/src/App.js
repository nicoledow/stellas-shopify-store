import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductsContainer from './containers/ProductsContainer';
import NewProductForm from './components/NewProductForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1> Stella's Treats </h1>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductsContainer} />
          <Route exact path='/products/:id' component={NewProductForm} />
          <Route exact path='/products/new' component={NewProductForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
