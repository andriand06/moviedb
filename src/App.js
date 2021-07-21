import React from 'react';
// Routing
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyles'
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound'
const App = ()=> ( 
    <Router>
      <Header />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/:movieId" component={Movie}></Route>
      <Route path="/*/*" component={NotFound}></Route>
      <GlobalStyle/>
    </Router>
  );


export default App;
