import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './pages/Home'
import Story from './pages/Story'
import Problem from './pages/Problem'
import Product from './pages/Product'
import ProductLink from './pages/ProductLink'


function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Story" component={Story} />
          <Route path="/Problem" component={Problem} />
          <Route path="/Product" component={Product} />
          <Route path="/Product/:productId" component={ProductLink} />
         
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;