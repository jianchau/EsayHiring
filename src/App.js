import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Main from './layouts/Index'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
