import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Search from "./Search";
import Web3 from 'web3';
import { Link } from "react-router-dom";
import SailingIcon from "@mui/icons-material/Sailing";
import IconButton from "@mui/material/IconButton";
import ToggleButton from "@mui/material/ToggleButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Navbar = ({ setMainaccount, setMainweb3, isLogin }) => {
  console.log(isLogin);

  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다

        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    setMainaccount(account);
    console.log(account);
  }, [account]);

  useEffect(() => {
    setMainweb3(web3);
  }, [web3]);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    setAccount(accounts[0]);
  };


  return (
    <div className="navbar FlexRowreact">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <IconButton>
          <SailingIcon />
        </IconButton>
        OpenSea
      </Link>
      <Search searchValue={""} />
      <ul className="link">
        <Link
          to="/explore"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <li>Explore</li>
        </Link>
        <Link to="/create" style={{ textDecoration: "none", color: "inherit" }}>
          <li>Create</li>
        </Link>

        <Link
          to="/account"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <li>Account</li>
        </Link>
        <li>
          <AccountBalanceWalletIcon
            style={{ cursor: "pointer" }}
            onClick={() => {connectWallet();}}/>
        </li>

      </ul>

      {/* 지갑연결 상태 */}
      <div className={isLogin ? "login-succeed" : "login-needed"}>
        {isLogin ? 'connected!'
          : 'disconnected'}
      </div>

    </div>
  );
};

export default Navbar;