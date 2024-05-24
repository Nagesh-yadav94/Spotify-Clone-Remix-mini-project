import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// write your code here

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={Home} />
  </Switch>
)
export default App
