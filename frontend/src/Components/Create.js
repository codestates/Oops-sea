import { useEffect, useState } from "react";
import "./Create.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { create } from "ipfs-http-client";
import erc721AbiCreate from "../contract/erc721AbiCreate";

const Create = ({ web3, account }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [nftName, setNftName] = useState("");
  const [detailLink, setDetailLink] = useState("");
  const [description, setDescription] = useState("");
  const ethereumTypeList = ["ERC-721"];
  // const contractAddr = "0x8dc27935bA6725025D4b96F49445392E7AE45c5B"
  const contractAddr = "0x2Fd99173daA98f87E4F36aA84C256011738f8C2b";

  const mint = async () => {
    if (account === "" || web3 === undefined)
      return alert("지갑을 연결하세요.");
    console.log(web3, account, contractAddr);

    const client = create("https://ipfs.infura.io:5001/api/v0");
    let cid = await client.add(fileUrl);
    let token_uri = `https://ipfs.infura.io/ipfs/${cid.path}`;

    let tokenContract = await new web3.eth.Contract(
      erc721AbiCreate,
      contractAddr,
      {
        from: account,
      }
    );
    // tokenContract.options.address = contractAddr;
    console.log(tokenContract);

    const newTokenId = await tokenContract.methods
      .mintNFT(account, token_uri)
      .send({
        from: account,
      })
      .on("receipt", (receipt) => {
        console.log(receipt);
      });

    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    console.log(name, symbol, totalSupply);
    alert(`새로운 NFT ${nftName}을 발급하였습니다! `);
  };

  return (
    <div className="Blockreact create">
      <main className="FlexColumnreact">
        <header>
          <h1>Create New Item</h1>
        </header>
        <form
          className="Formreact"
          // onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <ul>
            <p className="inputTip">
              <span className="after" />
              필수 영역
            </p>
            <br />
            <div className="case" shape="square">
              <label className="after inputTitle">
                이미지, 비디오, 오디오, 3D 모델
              </label>
              <span className="inputTip">
                지원 가능 파일: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
                GLB, GLTF. 최대 크기: 100MB
              </span>
              <br />
              <br />
              <div className="mediaContainer">
                {fileUrl ? (
                  <img className="media" src={fileUrl} />
                ) : (
                  <>
                    <label className="input-file-icon" htmlFor="input-file">
                      <div className="icon-case">
                        <AddPhotoAlternateIcon sx={{ fontSize: 100 }} />
                      </div>
                    </label>
                    <input
                      type="file"
                      id="input-file"
                      className="imgInput"
                      onChange={(e) => setFileUrl(e.target.files[0])}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="case">
              <div>
                <label className="after inputTitle">Name</label>
              </div>
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="이름"
                  className="inputBox"
                  onChange={(e) => setNftName(e.target.value)}
                ></input>
              </div>
            </div>
            <li>
              <div className="case">
                <div>
                  <label className="inputTitle">External link</label>
                  <span className="inputTip">
                    링크는 NFT 상세 페이지에 노출됩니다. 유저들은 링크를 통해서
                    해당 NFT에 대한 자세한 정보를 얻을 수 있습니다.
                  </span>
                </div>
                <div>
                  <input
                    id="external_link"
                    placeholder="https://yoursite.io/item/123"
                    className="inputBox"
                    onChange={(e) => setDetailLink(e.target.value)}
                  ></input>
                </div>
              </div>
            </li>
            <br />
            <li>
              <div className="case">
                <div>
                  <label className="inputTitle">Description</label>
                  <span className="inputTip">
                    Description은 NFT 상세 페이지의 image 아래에 노출됩니다.
                  </span>
                </div>
                <textarea
                  id="description"
                  placeholder="해당 NFT에 대한 자세한 정보를 작성하는 칸입니다."
                  className="inputBox inputDescription"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </li>
          </ul>
          <div>
            <span>
              <div className="mint-btn">
                <button
                  type="submit"
                  onClick={() => {
                    mint();
                  }}
                >
                  생성
                </button>
              </div>
            </span>
          </div>
          <br />
          <br />
          <br />
          <br />
        </form>
      </main>
    </div>
  );
};

export default Create;
