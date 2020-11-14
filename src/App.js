import './App.css';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/login'>LOGIN</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Switch>
      <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
    </div>
  );
}

export default App;
