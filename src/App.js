import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './views/HomePage/HomePage';
import ShopView from './views/ShopView/ShopView';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopView} />
      </Switch>
    </div>
  );
}

export default App;
