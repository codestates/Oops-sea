// 1. Erc721 컴포넌트에서 web3.js를 사용해야하므로 App.js로부터 web3과 account를 받아오고, abi import
// 2. eth.methods.Contract 로 컨트랙트 객체를 생성
// 3. ERC721 컨트랙트의 transferFrom 함수를 사용해 토큰을 이동
import erc721Abi from "../contract/erc721Abi";
import { useState } from "react";

function Erc721({ web3, account, erc721list, newErc721addr }) {
  const [to, setTo] = useState("");

  // Erc721 전송 function
  const sendToken = async (tokenAddr, tokenId) => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, tokenAddr, {
      // abi, address 로 토큰객체 생성
      from: account,
    });

    if (to.length === 0) return alert("NFT를 보낼 대상의 주소를 입력해주세요.");

    // 토큰 전송
    // Contract.methods.transferFrom(송신자주소, 수신자주소, 보낼토큰의id)
    tokenContract.methods
      .transferFrom(account, to, tokenId)
      .send({
        // Promise 반환
        from: account,
      })
      .on("receipt", (receipt) => {
        // .on으로 받아 보낸내역 setTo() callback
        setTo("");
        alert("전송되었습니다!");
      });
  };

  return (
    <div className="erc721list">
      {erc721list.map((token) => {
        return (
          // 보유 Erc721 토큰 list
          <div className="card erc721token addOption" key={token.tokenId}>
            <div className="flexbox">
              <img
                className="card-img-top addOption"
                src={token.tokenURI}
                width={300}
              />
              <div className="flexbox2">
                <div className="name">
                  <strong>Name : </strong>
                  {token.name}
                </div>
                <div className="symbol">
                  <strong>Symbol : </strong>
                  {token.symbol}
                </div>
                <div className="nft">
                  <strong>ID : </strong>
                  {token.tokenId}
                </div>

                {/* 토큰 전송 form */}
                <div className="tokenTransfer">
                  <input
                    className="card-title addOption title"
                    type="text"
                    value={to}
                    placeholder="전송받을 주소 입력"
                    onChange={(e) => {
                      setTo(e.target.value);
                    }}
                  />
                  <button
                    className="card-text sendErc721Btn btn btn-secondary"
                    onClick={sendToken.bind(this, newErc721addr, token.tokenId)}
                  >
                    전송
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Erc721;
