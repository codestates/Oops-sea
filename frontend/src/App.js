import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Create from "./components/Create";
import Account from "./components/Account";
import Navbar from "./components/Navbar";
import Web3 from "web3";

function App() {
  // const [web3, setWeb3] = useState();
  // const [account, setAccount] = useState('');
  const [mainaccount, setMainaccount] = useState("");
  const [mainweb3, setMainweb3] = useState();
  const [clicked, setClicked] = useState();
  const [isLogin, setIsLogin] = useState(false);
  // const [newErc721addr, setNewErc721Addr] = useState('0x8dc27935bA6725025D4b96F49445392E7AE45c5B'); // my ERC721 CA
  // const [erc721list, setErc721list] = useState([]);

  useEffect(() => {
    setMainaccount(mainaccount);
  }, [mainaccount]);

  useEffect(() => {
    if (mainaccount === undefined || mainaccount === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [mainaccount]);

  const handleClicked = (e) => {
    setClicked(e);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar
          setMainaccount={setMainaccount}
          setMainweb3={setMainweb3}
          isLogin={isLogin}
        />
        <Routes>
          <Route
            exact={true}
            path="/"
            element={<Home account={mainaccount} />}
          />
          <Route
            path="/explore"
            element={
              <Explore account={mainaccount} handleClicked={handleClicked} />
            }
          />
          <Route path="/create" element={<Create account={mainaccount} />} />
          <Route
            path="/account"
            element={<Account web3={mainweb3} account={mainaccount} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
