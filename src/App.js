import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home"
import Header from "./components/Headers/header"
import { Routes, Route } from "react-router-dom";
import Loginpage from './components/Login/loginPage';
import history from './helpers/history'
import ListCases from './components/Case/listCases';
import Case from './components/Case/Case';
import AddCase from './components/Case/addCase';
import AddEvidence from './components/Evidence/addEvidence';
import Evidences from './components/Evidence/listEvidences';
import Evidence from './components/Evidence/Evidence';
import UserRequests from './components/Requests/UserRequests';
import EvidenceRequests from './components/Requests/EvidenceRequests';
import UserEvidences from './components/Evidence/UserEvidences';
import MyEvidenceRequests from './components/Evidence/MyEvidenceRequests';
import AboutUs from './components/AboutUs/about us';
function App() {
  return (
    <div className="App">

      < Header />
      <Routes history={history}>
        <Route path="/" element={ < Home /> } />
        <Route path="/addevidence" element={ < AddEvidence /> } />
        <Route path="/case" element={ < Case /> } />
        <Route path="/addcase" element={ < AddCase /> } />
        <Route path="/cases" element={ < ListCases /> } />
        <Route path="/evidence" element={ < Evidence /> } />
        <Route path="/userrequests" element={ < UserRequests /> } />
        <Route path="/evidencerequests" element={ < EvidenceRequests /> } />
        <Route path="/listevidences" element={ < Evidences /> } />
        <Route path="/userevidences" element={ < UserEvidences /> } />
        <Route path="/myevidencerequests" element={ < MyEvidenceRequests /> } />

        <Route path="login" element={ < Loginpage /> } />
        <Route path="aboutus" element={ < AboutUs /> } />
      </Routes>

    </div>
  );
}

export default App;
