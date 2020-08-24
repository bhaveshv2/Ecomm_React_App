import React from 'react';
import { Navbar,Home } from './index';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;