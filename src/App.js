import React from 'react';
import { Route,Switch,Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <header>
        <h1>A-F</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link>Classes</Link>
          <Link>Instructors</Link>
          <Link>Sign Up</Link>
          <Link to='/login'>Login</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path ='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
