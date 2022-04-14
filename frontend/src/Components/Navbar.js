import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import SailingIcon from "@mui/icons-material/Sailing";
import IconButton from "@mui/material/IconButton";
import ToggleButton from "@mui/material/ToggleButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Navbar = ( ) => {
  const [account, setAccount] = useState('');
  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } else {
        alert("Install Metamask");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAccount();
  }, []);

  useEffect(() => {
    console.log(account);
  }, [account]);

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
        <li>
          {/* <button
            type="button"
            calssName="metaConnect"
            style={{ cursor: "pointer" }}
            onClick={() => {
              getAccount();
              console.log(account);
            }}
          > */}
          <ToggleButton
            onClick={() => {
              getAccount();
              console.log(account);
            }}
          >
            <AccountBalanceWalletIcon />
          </ToggleButton>
          {/* </button> */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;