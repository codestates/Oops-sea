import React, { useState } from "react";
import './Detail.css'

const Detail = ({ clicked }) => {
  return (
    <div className="Blockreact">
      <div className="item--summary">
        <article className="media-container">
          <img className="media" src="images/image1.png"></img>
          image
        </article>
        <section className="item-description">
          <section className="item-description__created-by" value={""}>
            Created by {""}
          </section>
          <div className="item-description__text" value={""}>
            description
          </div>
        </section>
      </div>
      <div className="item--main">
        {/* <section className="item__name">item name</section>
        <section className="item__owned-by">item owned by</section>
        <div className="item__price">item price</div> */}
        <h5 className="card-title">{clicked.name}</h5>
        <span className="card-text"><strong>{'<Description>'}</strong><p>{clicked.description}</p></span>
        <span className="card-text"><strong>{'<Price>'}</strong><p> 10 ETH <img className="eth-logo" src={`https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg`}/></p></span>
        <span className="pcard-text"><strong>{'<Asset Contract>'}</strong><p>{clicked.asset_contract.address}</p></span> 
        <button type="button" className="btn btn-primary">Buy now</button>
      </div>
    </div>
  );
};

export default Detail;