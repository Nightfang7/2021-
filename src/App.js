import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './pages/Home'
import Story from './pages/Story'
import Problem from './pages/Problem'
import Special from './pages/Special'
import Product from './pages/Product'


function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Story" component={Story} />
          <Route path="/Problem" component={Problem} />
          <Route exact path="/Special" component={Special} />
          <Route path="/product/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;