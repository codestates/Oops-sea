import * as React from "react";
import { Link } from "react-router-dom";
import "./NftList.css";

const NftList = ({ data, handleClick }) => {
  const handleOnClick = (e) => {
    handleClick(e);
  };

  return (
    <div className="card-group addOption">
      {data.map((item) => (
        <div className="card addOption" key={item.id}>
          <img src={item.image_url} className="card-img-top" alt="..." />
          <div className="card-body addOption">
            <h5 className="card-title addOption">{item.name}</h5>
            {/* <p className="card-text">{item.description}</p> */}
            <p className="card-text addOption">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  handleOnClick(item);
                }}
              >
                <Link to={"/explore/detail"} className="btn btn-secondary">
                  선택한 NFT 상세페이지
                </Link>
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NftList;
