import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './pages/Home'
import Story from './pages/story'


function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Story" component={Story} />
         
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;