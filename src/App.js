import './App.css';
import React from 'react';
import navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
