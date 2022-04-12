import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Home from './components/Home';
import Explore from "./components/Explore";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web3 from 'web3';
import erc721Abi from "./contract/erc721Abi"
import TokenList from "./Component/TokenList";


// err 1
// [#리액트에러 #cannot find 'path']
// React, 'path'를 찾을 수 없다는 에러를 만날때
// 홈페이지에서 사용법이 'import'가 아닌 'require'인데 import 사용시 발생

// 1. node_modules > react-scripts > config> webpack.config.js // cd
// 2. resolve : fallback:{ "path": require.resolve("path-browserify") } // add
// 3. sudo npm install -g path-browserify

// ref) https://velog.io/@rohkorea86/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%98%EC%84%B8%EC%9A%94-bais08yn

// err 2
// webpack으로 구축한 React 프로젝트에서 환경변수 사용하기
// ref) https://db2dev.tistory.com/entry/React-Webpack%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%B6%95%ED%95%9C-React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98env-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0



function App() {
  const [web3, setWeb3] = useState();
  const [caver, setCaver] = useState();
  const [account, setAccount] = useState("");
  const [newErc721addr, setNewErc721Addr] = useState('0x8dc27935bA6725025D4b96F49445392E7AE45c5B'); // my ERC721 CA
  const [erc721list, setErc721list] = useState([]);
  const [isClickedAll, setIsClickedAll] = useState(false);
  const [isClickedMy, setIsClickedMy] = useState(false);
  let accounts;

  // useEffect(() => {
  //   // state가 변할때마다 window.ethereum을 확인하여 지갑연결 여부 확인
  //
  //   if (typeof window.ethereum !== "undefined") {
  //     try {
  //       const web = new Web3(window.ethereum);
  //       setWeb3(web);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //
  // }, [])
  //
  // // 1. 지갑 연결
  //
  // const connectWallet = async () => {
  //   accounts = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //
  //   setAccount(accounts[0]);
  // };
  // 2. ERC721 Contract Address(CA) 받기
  const getErc721Contract = async (contractAddr) => {
    const erc721Contract = await new web3.eth.Contract(
      erc721Abi,
      contractAddr
    );
    erc721Contract.options.address = contractAddr;

    const name = await erc721Contract.methods.name().call();
    const symbol = await erc721Contract.methods.symbol().call();
    const totalSupply = await erc721Contract.methods.totalSupply().call();

    console.log("NFT 현황 - name, symbol, totalSupply : ", name, symbol, totalSupply);

    return erc721Contract;

  }

  // 3. Erc721 list 보여주기(NFT)
  const showMyErc721Token = async (myAccount) => {
    console.log('clicked showMyErcToken button -> ', myAccount)

    const {erc721Contract, tokenName, tokenSymbol, totalSupply} = await getErc721Contract(newErc721addr); // 컨트랙트 불러오기

    const erc721MyList = [];
    for (let tokenId=1; tokenId<=totalSupply; tokenId++) {
      let tokenOwner = await erc721Contract.methods
        .ownerOf(tokenId)
        .call();

      console.log(tokenOwner);

      if (String(tokenOwner).toLowerCase() === myAccount) {
        let tokenURI = await erc721Contract.methods
          .tokenURI(tokenId)
          .call();

        console.log(tokenOwner, tokenURI);

        erc721MyList.push({ tokenName, tokenSymbol, tokenId, tokenURI, tokenOwner })

      }
    }
    setErc721list(erc721MyList);
    setIsClickedAll(false);
    setIsClickedMy(true);
  }

  // 4. 모든 Erc721 list 보여주기
  const showAllErc721Token = async () => {
    console.log('clicked showAllErcToken button ')

    const {erc721Contract, tokenName, tokenSymbol, totalSupply} = await getErc721Contract(newErc721addr); // 컨트랙트 불러오기

    const erc721AllList = [];

    for (let tokenId=1; tokenId<=totalSupply; tokenId++) {
      let tokenOwner = await erc721Contract.methods
        .ownerOf(tokenId)
        .call();

      let tokenURI = await erc721Contract.methods
        .tokenURI(tokenId)
        .call();

      erc721AllList.push({tokenName, tokenSymbol, tokenId, tokenURI, tokenOwner})

    }
    setErc721list(erc721AllList);
    setIsClickedMy(false);
    setIsClickedAll(true);
  }

  return (
    <BrowserRouter>
      <div className="App">
        {/*<div className='wallet-container'>*/}
        {/*  <button className='connect-wallet-Btn'*/}
        {/*          onClick={() => connectWallet()}>*/}
        {/*    connect to MetaMask*/}
        {/*  </button>*/}
        {/*  <div className='userInfo'>주소 : {account}</div>*/}
        {/*</div>*/}
        {/*<div className='getMyErc721'>*/}
        {/*  ERC 721 Contract Address(CA):*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    defaultValue="0x8dc27935bA6725025D4b96F49445392E7AE45c5B"*/}
        {/*    onChange={(e) => {*/}
        {/*      setNewErc721Addr(e.target.value);  // 입력받을 때마다 newErc721addr 갱신*/}
        {/*    }}*/}
        {/*  ></input>*/}
        {/*</div>*/}
        {/*<div className='showMyErc721'>*/}
        {/*  <button onClick={() => {showMyErc721Token(account)}}>*/}
        {/*    show my erc721 list*/}
        {/*  </button>*/}
        {/*  <br></br>*/}
        {/*  {isClickedMy?*/}
        {/*    <div>*/}
        {/*      <TokenList web3={web3} account={account} erc721list={erc721list} erc721addr={newErc721addr}/>*/}
        {/*    </div>*/}
        {/*    :*/}
        {/*    ''*/}
        {/*  }*/}
        {/*</div>*/}
        {/*<div className="showAllErc721">*/}
        {/*  <button onClick={showAllErc721Token}>show All erc721 list</button>*/}

        {/*  {isClickedAll?*/}
        {/*    <div>*/}
        {/*      <TokenList web3={web3} account={account} erc721list={erc721list} erc721addr={newErc721addr}/>*/}
        {/*    </div>*/}
        {/*    :*/}
        {/*    ''*/}
        {/*  }*/}
        {/*</div>*/}
        <Navbar props={(account, setAccount)} />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>
        <Routes>
          <Route
            path="/explore"
            element={<Explore props={(account, setAccount)} />}
          />
        </Routes>
        <Routes>
          <Route
            path="/create"
            element={<Create props={(account, setAccount)} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
