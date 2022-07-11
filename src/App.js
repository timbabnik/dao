import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Proposal from "./pages/Proposal"
import moralisLogo from "./images/Moralis.png";
import { ConnectButton } from 'web3uikit';


function App() {
  return (
    <>
      <div className="header">
        <h1 style={{color: "#fff", padding: 10, borderRadius: 10, fontWeight: "lighter"}}>DAO PROJECT</h1>
        <ConnectButton />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </>
  );
}

export default App;
