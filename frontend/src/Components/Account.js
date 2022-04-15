import erc721Abi from "../contract/erc721Abi";
import Web3 from "web3";

import TokenList from "./TokenList";
import { useState, useEffect } from "react";

const Account = ({ web3, account }) => {
  const [newErc721addr, setNewErc721Addr] = useState(
    "0x8dc27935bA6725025D4b96F49445392E7AE45c5B"
  ); // my ERC721 CA
  const [erc721list, setErc721list] = useState([]);

  // using web3.js to create contract obj, call contract method and save contract's tokens using setState
  const addNewErc721Token = async () => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, newErc721addr); // create contract obj using abi, address
    // alert('erc721');

    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    let arr = [];
    for (let i = 1; i <= totalSupply; i++) {
      // 2-1. 사용자가 가진 토큰의 총 개수만큼 반복
      arr.push(i);
    }

    for (let tokenId of arr) {
      // 2-2. 모든 토큰들을 꺼내면서 토큰 오너 주소를 받아옴(tokenContract.methods.ownerOf(tokenId).call())
      let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
      if (String(tokenOwner).toLowerCase() === account) {
        // 2-3. tokenOwner가 dApp으로 연결한 account 주소와 같은지 검증
        let tokenURI = await tokenContract.methods.tokenURI(tokenId).call(); // 2-4. 같다면 Contract.methods.tokenURI().call()로 해당 토큰의 URI 를 가져옴
        setErc721list((prevState) => {
          return [...prevState, { name, symbol, tokenId, tokenURI }];
        }); // 2-5. setErc721list에 세팅하여 토큰 정보 저장
      }
    }
  };

  console.log(web3);

  return (
    <div>
      <div className="newErc721">
        ERC 721 Contract Address(CA):
        <input
          type="text"
          defaultValue="0x8dc27935bA6725025D4b96F49445392E7AE45c5B"
          onChange={(e) => {
            setNewErc721Addr(e.target.value); // 입력받을 때마다 newErc721addr 갱신
          }}
        ></input>
        <button onClick={addNewErc721Token}>MyNFT Collections</button>
      </div>

      <TokenList
        web3={web3}
        account={account}
        erc721list={erc721list}
        newErc721addr={newErc721addr}
      />
    </div>
  );
};

export default Account;
