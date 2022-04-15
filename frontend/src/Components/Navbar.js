import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Search from "./Search";
import Web3 from "web3";
import { Link } from "react-router-dom";
import SailingIcon from "@mui/icons-material/Sailing";
import IconButton from "@mui/material/IconButton";
import ToggleButton from "@mui/material/ToggleButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Navbar = ({ mainaccount, setMainaccount, setMainweb3 }) => {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다

        console.log("web:", web);
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
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    alert("지갑이 연결되었습니다!");
  };

  return (
    <div className="navbar FlexRowreact">
      <Link
        to="/"
        style={{ textDecoration: "none", color: "inherit" }}
        className="to-home"
      >
        <IconButton>
          <SailingIcon sx={{ fontSize: 50 }} />
        </IconButton>
        <span className="navbar-title">OopsSea</span>
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
          {!mainaccount ? (
            <AccountBalanceWalletIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                connectWallet();
              }}
            />
          ) : (
            <div className="wallet-connected Blockreact FlexColumnreact">
              <div>Wallet</div> <div>Connected</div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
