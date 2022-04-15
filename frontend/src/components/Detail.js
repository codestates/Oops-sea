import React from "react";
// import Footer from "./Footer";
import "./Detail.css";

const Detail = ({ clicked }) => {
  const handleClick = () => {
    console.log("buy now!");
  };

  return (
    <>
      <div className="detail">
        <div className="item--summary">
          <article>
            <img className="media" src={clicked.image_url} />
          </article>
          <section className="item-description">
            <div className="item-description__created-by">
              Created by
              <div className="item-description__created-by__address">
                {clicked.creator.address}
              </div>
            </div>
            <div className="item-description__text">{clicked.description}</div>
          </section>
        </div>
        <div className="item--main ">
          <section className="item__name">{clicked.name}</section>
          {/* <section className="item__owned-by">item owned by</section> */}
          <section className="item__asset-contract">
            Asset contract address
            <div className="item__asset-contract__addr">
              {clicked.asset_contract.address}
            </div>
          </section>

          <div className="item__current-price">Current Price</div>
          <div className="item__price">
            <img
              className="eth-logo"
              src={`https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg`}
            />
            10 ETH
          </div>
          <button onClick={() => handleClick()}>Buy Now</button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Detail;