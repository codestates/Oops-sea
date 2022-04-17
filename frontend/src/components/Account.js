import erc721AbiCreate from "../contract/erc721AbiCreate";
// import erc721Abi from "../contract/erc721Abi"
import TokenList from "./TokenList";
import { useState, useEffect } from "react";
import './Account.css';
import {Button, Chip, Divider, Icon} from "@mui/material";


const Account = ({ web3, account }) => {

  // const [newErc721addr, setNewErc721Addr] = useState('0x8dc27935bA6725025D4b96F49445392E7AE45c5B'); // my ERC721 CA
  const [newErc721addr, setNewErc721Addr] = useState('0x2Fd99173daA98f87E4F36aA84C256011738f8C2b'); // my new ERC721Create CA 
  const [erc721list, setErc721list] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log('web3', web3);
    // console.log('account', account);
    if (web3 && account && erc721list && newErc721addr) {
      setIsLoading(false);
    }
  }, []);


  // using web3.js to create contract obj, call contract method and save contract's tokens using setState
  const addNewErc721Token = async () => {

    console.log(account, web3);
    if (account === '' || web3 === undefined) return alert('지갑을 연결하세요.')

    const tokenContract = await new web3.eth.Contract( // create contract obj using abi, address
      // erc721Abi,
      erc721AbiCreate,
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
          return [...prevState, {name, symbol, tokenId, tokenURI}];
        });// 2-5. setErc721list에 세팅하여 토큰 정보 저장
      }
    }
  }

  return (
    <div>
      <div style={{paddingTop: "120px", backgroundColor: "#E5E8EB"}}>
        <div className="profileContainer">
          <div className={"topContainer"}></div>
          <div className={"middleContainer"}>
            <div className={"profile"}>
              <Icon name="user outline" size="huge" color="grey"/>
            </div>
          </div>
          <div className={"bottomContainer"}>
            <div className={"useContainer"}>
              <p className={"nameFont"}>Unnamed</p>
              {!isLoading && (
                <Chip label={account}/>
              )}
            </div>
          </div>
        </div>
      </div>
      <Divider/>
      <div className={"contentContainer"}>
        <div className={"tokenContainer"}>
          <p className={"tokenFont"}>My Collections</p>
          <br/><br/>
          <div className="mynft-collections-btn">
            <button onClick={addNewErc721Token}>MyNFT Collections</button>     
          </div>
          {!isLoading && (
            <TokenList
              web3={web3}
              account={account}
              erc721list={erc721list}
              newErc721addr={newErc721addr}
            />
          )}
        </div>
      </div>
    </div>
    );
  };
  
  export default Account;