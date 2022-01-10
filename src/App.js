import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home"
import registerAdmin from "./components/registerAdmin"
import registerEvidence from "./components/registerEvidence"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/registerAdmin" exact component={registerAdmin}></Route>
        <Route path="/registerEvidence" exact component={registerEvidence}></Route>
      </Switch>
      </BrowserRouter>

      <Home />
    </div>
  );
}

export default App;
