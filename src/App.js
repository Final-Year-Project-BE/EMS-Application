import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home"
import RegisterAdmin from "./components/registerAdmin"
import RegisterEvidence from "./components/registerEvidence"
import Header from "./components/adminHeader"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      < Header />
      <Routes>
        <Route path="/" element={ < Home /> } />
        <Route path="registeradmin" element={ < RegisterAdmin /> } />
        <Route path="registerevidence" element={ < RegisterEvidence /> } />
      </Routes>

    </div>
  );
}

export default App;
