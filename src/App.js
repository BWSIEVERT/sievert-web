import './App.css';
import { Route, Switch } from 'react-router-dom'
import RegisterForm from './Components/Register/RegisterForm'
import LoginForm from './Components/Login/LoginForm'
import emailVerification from './Components/emailVerification/emailVerification'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/sweb-users/register/form' component={RegisterForm} />
        <Route exact path='/sweb-users/login/form' component={LoginForm} />
        <Route exact path='/sweb-users/register/email-verification' component={emailVerification} />
      </Switch>
    </div>
  );
}

export default App;
