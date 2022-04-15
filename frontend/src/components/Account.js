
import erc721Abi from "../contract/erc721Abi"
import Web3 from 'web3';
//import { Button, Dimmer, Divider, Icon, Label, Loader, Segment } from "semantic-ui-react";
import "./Account.css";

import TokenList from "./TokenList";
import { useState, useEffect } from "react";

const Account = ({ web3, account }) => {

  const [newErc721addr, setNewErc721Addr] = useState('0x8dc27935bA6725025D4b96F49445392E7AE45c5B'); // my ERC721 CA
  const [erc721list, setErc721list] = useState([]);


  // using web3.js to create contract obj, call contract method and save contract's tokens using setState
  const addNewErc721Token = async () => {
    const tokenContract = await new web3.eth.Contract( // create contract obj using abi, address
      erc721Abi,
      newErc721addr
    );
    // alert('erc721');

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
        <div>
          <div style={{ paddingTop: "120px", backgroundColor: "#E5E8EB" }}>
            <div className={styles.profileContainer}>
              <div className={styles.topContainer}></div>
              <div className={styles.middleContainer}>
                <div className={styles.profile}>
                  <Icon name="user outline" size="huge" color="grey" />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.useContainer}>
                  <p className={styles.nameFont}>Unnamed</p>
                  {walletType == "eth" ? (
                    <Button color="grey">
                      <Icon name="ethereum" /> {account}
                    </Button>
                  ) : (
                    <Label as="a" color="gray" content={account} image={klayImageProps} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className={styles.contentContainer}>
            <div className={styles.tokenContainer}>
              <p className={styles.tokenFont}>My Collections</p>
              {isLoading && (
                <Segment basic>
                  <div style={{ height: "140px" }}>
                    <Dimmer active inverted>
                      <Loader size="large" inverted content="Loading" />
                    </Dimmer>
                  </div>
                </Segment>
              )}
              {!isLoading && (
                <TokenList web3={web3} account={account} nftlist={nftlist} newKip17addr={newKip17addr} walletType={walletType} newErc721addr={newErc721addr} mine={true} />
              )}
            </div>
          </div>
        </div>
      );
              }
  //     <div>
  //       <div className="newErc721">
  //       ERC 721 Contract Address(CA): 
  //       <input className="textbox"
  //           type="text"
  //           defaultValue="0x8dc27935bA6725025D4b96F49445392E7AE45c5B"
  //           onChange={(e) => {
  //             setNewErc721Addr(e.target.value);  // 입력받을 때마다 newErc721addr 갱신
  //           }}
  //       ></input> 
  //       <Link to="/explore"><button className="mynftbnt" onClick={addNewErc721Token}>MyNFT Collections</button></Link>    
  //     </div>

  //     <TokenList web3={web3} account={account} erc721list={erc721list} newErc721addr={newErc721addr} />
  //   </div>
  //   );
  // };
  
  export default Account;