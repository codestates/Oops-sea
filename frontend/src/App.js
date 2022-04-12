import './App.css';
import React, { useEffect, useState } from "react"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Web3 from 'web3';
import erc721Abi from "./contract/erc721Abi"
import TokenList from "./components/TokenList";


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
  const [account, setAccount] = useState('');
  const [newErc721addr, setNewErc721Addr] = useState('0x8dc27935bA6725025D4b96F49445392E7AE45c5B'); // my ERC721 CA
  const [erc721list, setErc721list] = useState([]);
  let accounts;

  useEffect(() => {
    // state가 변할때마다 window.ethereum을 확인하여 지갑연결 여부 확인

    if (typeof window.ethereum !== "undefined") { 
      try {
          const web = new Web3(window.ethereum);  
          setWeb3(web);
      } catch (err) {
          console.log(err);
      }
    }

  }, [])

  // 1. 지갑 연결

  const connectWallet = async () => {
    accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  };


  // 2. using web3.js to create contract obj, call contract function and save contract's tokens

  
  const addNewErc721Token = async () => {
    const tokenContract = await new web3.eth.Contract( // create contract obj using abi, address
      erc721Abi,
      newErc721addr
    );

    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

	  let arr = [];
    for (let i = 1; i <= totalSupply; i++) { // 2-1. 사용자가 가진 토큰의 총 개수만큼 반복
        arr.push(i);
    }
    
    for (let tokenId of arr) { // 2-2. 모든 토큰들을 꺼내면서 토큰 오너 주소를 받아옴(tokenContract.methods.ownerOf(tokenId).call())
        let tokenOwner = await tokenContract.methods
            .ownerOf(tokenId)
            .call();
        if (String(tokenOwner).toLowerCase() === account) { // 2-3. tokenOwner가 dApp으로 연결한 account 주소와 같은지 검증
            let tokenURI = await tokenContract.methods
                .tokenURI(tokenId)  
                .call();  // 2-4. 같다면 Contract.methods.tokenURI().call()로 해당 토큰의 URI 를 가져옴
            setErc721list((prevState) => {
                return [...prevState, { name, symbol, tokenId, tokenURI }];
            });// 2-5. setErc721list에 세팅하여 토큰 정보 저장 
        }
    }
  }

  return (

      <div className="App">
        <div className='wallet-container'>
          <button className='connect-wallet-Btn'
                  onClick={() => connectWallet()}>
            connect to MetaMask
          </button>
          <div className='userInfo'>주소 : {account}</div>  
        </div>


        <div className="newErc721">
          ERC 721 Contract Address(CA): 
          <input
              type="text"
              defaultValue="0x8dc27935bA6725025D4b96F49445392E7AE45c5B"
              onChange={(e) => {
                setNewErc721Addr(e.target.value);  // 입력받을 때마다 newErc721addr 갱신
              }}
          ></input> 
          <button onClick={addNewErc721Token}>add new erc721</button>     
        </div>    

        <TokenList web3={web3} account={account} erc721list={erc721list} />

      </div>
   
  );
}

export default App;
