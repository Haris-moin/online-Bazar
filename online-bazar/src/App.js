import './App.css';
import LoginContainer from './features/auth/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpContainer from './features/auth/signUp';
import Layout from './layout';
import TShirt from './features/clothes/tshirt';
import { Shirts } from './features/clothes/shirts';
import { Shorts } from './features/clothes/shorts';
import { Jeans } from './features/clothes/jeans';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Layout} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/t-shirts" component={TShirt} />
          <Route path="/shirts" component={Shirts} />
          <Route path="/shorts" component={Shorts} />
          <Route path="/jeans" component={Jeans} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
