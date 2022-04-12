import { useEffect, useState } from "react";
import "./Create.css";
// import { MintNFT } from "../contracts/MintNFT";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const Create = ({ account }) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const ethereumTypeList = ["ERC-721"];

  const handleClick = async (e) => {
    try {
      if (!account) return;
      //   const response = await MintNFT.methods
      //     .createNFT()
      //     .send({ from: account });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Blockreact">
      {/* <nav className="Navbar--main">
        Nav가 들어갈 예정입니다.
        <div className="Navbar--left">오픈씨 마크 + OpenSea</div>
        <div className="Blockreact">Search 창</div>
        <ul className="Navbarreact__ContainerList">
          <li className="NavItemreact--profile">프로필</li>
          <li className="NavItemreact--wallet">지갑</li>
          <li className="NavItemreact--LiContainer">햄버거</li>
        </ul>
      </nav> */}
      <main className="FlexColumnreact">
        <header>
          <h1>Create New Item</h1>
        </header>
        <form className="Formreact">
          <p className="inputTip">
            <span className="after" />
            필수 영역
          </p>
          <div className="case" shape="square">
            <label className="after inputTitle">
              이미지, 비디오, 오디오, 3D 모델
            </label>
            <span className="inputTip">
              지원 가능 파일: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB,
              GLTF. 최대 크기: 100MB
            </span>
            <div className="mediaContainer">
              <input type="file" className="mediaBox"></input>
              <AddPhotoAlternateIcon sx={{ fontSize: 100 }} />
              <i value="image" className="icon">
                image
              </i>
              <div></div>
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
              ></input>
            </div>
          </div>
          <div className="case">
            <div>
              <label className="inputTitle">External link</label>
              <span className="inputTip">
                링크는 NFT 상세 페이지에 노출됩니다. 유저들은 링크를 통해서 해당
                NFT에 대한 자세한 정보를 얻을 수 있습니다.
              </span>
            </div>
            <div>
              <input
                id="external_link"
                placeholder="외부 링크"
                className="inputBox"
              ></input>
            </div>
          </div>
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
            ></textarea>
          </div>
          <div>
            <span>
              <div>
                <button type="button">생성</button>
              </div>
            </span>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Create;
