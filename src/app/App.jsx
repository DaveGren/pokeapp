import React from 'react';
import { Route } from 'react-router-dom';

import Pokedex from './pokedex/Pokedex';
import Home from './home/Home';
import Sidebar from './Sidebar'

import './App.scss';

const App = () => (
    <div className="App">
      <Sidebar />
      <div className="App-route">
        <Route path="/home" component={Home}/>
        <Route path="/pokedex" component={Pokedex}/>
      </div>
    </div>
);

export default App;
