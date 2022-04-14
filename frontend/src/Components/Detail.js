import React, { useState } from "react";

const Detail = () => {
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
        <section className="item__name">item name</section>
        <section className="item__owned-by">item owned by</section>
        <div className="item__price">item price</div>
      </div>
    </div>
  );
};

export default Detail;
