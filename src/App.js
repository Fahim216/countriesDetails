import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetail from './Components/CountryDetail/CountryDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    
 
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/country/:name">
         <CountryDetail></CountryDetail>
        </Route>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
        <NoMatch></NoMatch>
          </Route>
        
      </Switch>
    </Router>
  
  );
}

export default App;
