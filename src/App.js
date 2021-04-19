import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './pages/Home'
import Story from './pages/story'
import Problem from './pages/Problem'
import Special from './pages/Special'
import Product from './pages/Product'
import MotherDay from './pages/MotherDay'
import Discount from './pages/Discount'
import Eightinchcake from './pages/Eightinchcake'
import Eggcake from './pages/Eggcake'
import Jelly from './pages/Jelly'


function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Story" component={Story} />
          <Route path="/Problem" component={Problem} />
          <Route exact path="/Special" component={Special} />
          <Route exact path="/MotherDay" component={MotherDay} />
          <Route exact path="/Discount" component={Discount} />
          <Route exact path="/Eightinchcake" component={Eightinchcake} />
          <Route exact path="/Eggcake" component={Eggcake} />
          <Route exact path="/Jelly" component={Jelly} />
          <Route path="/product/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;