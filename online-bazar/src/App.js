import './App.css';
import LoginContainer from './features/auth/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpContainer from './features/auth/signUp';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LoginContainer} />
          <Route path="/signup" component={SignUpContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
