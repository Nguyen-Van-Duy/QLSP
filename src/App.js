import './App.css';
import Admin from './components/admin/Admin';
import Login from './components/Login/Login';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to='/login'>Login</Redirect>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
