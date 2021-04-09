import './App.css';
import { Route, Switch } from 'react-router-dom'
import RegisterForm from './Components/Register/RegisterForm'
import LoginForm from './Components/Login/LoginForm'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/sweb-users/register/form' component={RegisterForm} />
        <Route exact path='/sweb-users/login/form' component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
