import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home"
import RegisterAdmin from "./components/registerAdmin"
import RegisterEvidence from "./components/registerEvidence"
import Header from "./components/Headers/adminHeader"
import { Routes, Route } from "react-router-dom";
import Loginpage from './components/Login/loginPage'
function App() {
  return (
    <div className="App">
      < Header />
      <Routes>
        <Route path="/" element={ < Home /> } />
        <Route path="registeradmin" element={ < RegisterAdmin /> } />
        <Route path="registerevidence" element={ < RegisterEvidence /> } />
        <Route path="login" element={ < Loginpage /> } />
      </Routes>

    </div>
  );
}

export default App;
