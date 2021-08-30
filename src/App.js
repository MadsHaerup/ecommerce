import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './views/HomePage/HomePage';

const Hats = () => (
  <div>
    <h1>Hats</h1>
  </div>
)


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
