import React from 'react';
import { Route,Switch,Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Classes from './component/Classes';
import Instructors from './component/Instructors';
import ClassForm from './component/ClassForm'

function App() {
  return (
    <div className="App">
      <header>
        <h1>A-F</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/classes'>Classes</Link>
          <Link to='/instructors'>Instructors</Link>
          <Link to='/login' className='button'>Login</Link>
          <Link to ='/signup' className='button'>Sign Up</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path ='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path ='/classes' component={Classes} />
        <Route path='/instructors' component={Instructors} />
        <Route path='/classForm' component={ClassForm} />
      </Switch>
      <footer>
        
          <nav className='bottom-nav'>
            <Link className='btm-link'>Contact</Link>
            <Link className='btm-link'>About</Link>
            <Link className='btm-link'>Help</Link>
          </nav>
          <div>
            <p><em>Anywhere Fitness 2021</em></p>
          </div>
          <nav className='bottom-nav'>
            <Link to='/' className='btm-link'>Home</Link>
            <Link to='/instructors' className='btm-link'>Instructors</Link>
            <Link to='/classes' className='btm-link'>Classes</Link>
          </nav>
        
      </footer>

    </div>
    
  );
}

export default App;
