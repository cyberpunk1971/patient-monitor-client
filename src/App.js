import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
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
      <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Redirect to='/' />
    </div>
  );
}

export default App;
