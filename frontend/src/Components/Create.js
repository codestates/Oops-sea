import { useEffect, useState } from "react";
import "./Create.css";
import { create } from 'ipfs-http-client';
// import { MintNFT } from "../contracts/MintNFT";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const client = create('https://ipfs.infura.io:5001/api/v0')


const Create = ({ account }) => {
  const [name, setName] = useState("");
  const [imageUrl, updateImageUrl] = useState(``)
  const [description, setDescription] = useState("");
  const ethereumTypeList = ["ERC-721"];
  // const [file, setFile] = useState(null);
  // const [link, setLink] = useState("");
  // useEffect(()=>{
  // },[])

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

  async function onChangeImage(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      updateImageUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    const tokenURI = {
      name,
      description,
      image: imageUrl
    };

    try {
      const added = await client.add(JSON.stringify(tokenURI))
      const uri = `https://ipfs.infura.io/ipfs/${added.path}`
      const ADDRESS = '0xEf5c30bDC911C1Cfe9e637cd647DC4098441806D';
      console.log(uri);
      // const res = await axios.post('/api/nft',{
      //   ADDRESS,
      //   tokenURI,
      // });
      // console.log(res);

    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  return (
    <div className="Blockreact">
      <main className="FlexColumnreact">
        <header>
          <h1>Create New Item</h1>
        </header>
        <form className="Formreact" onSubmit={handleSubmit} encType="multipart/form-data">
          <p className="inputTip">
            <span className="after"/>
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
              <input type="file" className="mediaBox" onChange={onChangeImage}></input>
              <AddPhotoAlternateIcon sx={{fontSize: 100}}/>
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
                onChange={onChangeName}
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
              onChange={onChangeDescription}
            ></textarea>
          </div>
          <div>
            <span>
              <div>
                <button type="submit" onClick={handleClick}>생성</button>
              </div>
            </span>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Create;
