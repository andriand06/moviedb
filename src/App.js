import React from 'react';
// Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyles'
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//Context
import UserProvider from './context'
import Login from './components/Login';
const App = ()=> ( 
    <Router>
      <UserProvider>
      <Header />
      <Routes>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/:movieId"><Movie /></Route>
      <Route path="/*/*"><NotFound /></Route>
      </Routes>
      <GlobalStyle/>
      </UserProvider>
    </Router>
  );


export default App;
