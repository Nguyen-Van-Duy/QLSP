import './App.css';
import Admin from './components/admin/Admin';
import Login from './components/Login/Login';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

function App() {
  const token = useSelector(state=>state.token.token);
  
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to='/login'></Redirect>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {token !== '' && <Route path="/admin">
          <Admin />
        </Route>}
      </Switch>
    </div>
  );
}

export default App;
