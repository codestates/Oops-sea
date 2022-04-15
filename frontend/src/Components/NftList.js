import * as React from "react";
import { Link } from "react-router-dom";
import "./NftList.css";

const NftList = ({ data, handleClick }) => {
  const handleOnClick = (e) => {
    handleClick(e);
  };

  console.log(data);
  return (
    <>
      <div className="card-group explore-header">Explore Collections</div>
      <div className="card-group addOption Blockreact">
        {data.map((item) => (
          <div className="card addOption FlexRowreact" key={item.id}>
            {item.image_url ? (
              <>
                <div className="card-img">
                  <button
                    type="button"
                    className="btn card-img"
                    onClick={() => {
                      handleOnClick(item);
                    }}
                  >
                    <Link to={"/explore/detail"}>
                      <img
                        src={item.image_url}
                        className="card-img"
                        alt="..."
                      ></img>
                    </Link>
                  </button>
                </div>
                <div className="card-body addOption">
                  <h4 className="card-title addOption">{item.name}</h4>
                  <div className="card-creator">
                    Created by
                    <img
                      className="card-creator-profile"
                      src={item.creator.profile_img_url}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="no-img">No Image</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default NftList;
