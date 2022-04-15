import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const HeadText = "Discover, collect, and sell extraordinary NFTs";
  const DescText = "OpenSea is the world's first and largest NFT marketplace";

  return (
    <>
      <div>
        <div className="first">
          <div className="homeFirst">
            <div className="homeInside homeInside1">
              <div className="homeInsideLeftContent">
                <div className="LeftContent LeftContent1">
                  Discover, Collect, and sell extraordinary NFTs
                </div>
                <div className="LeftContent LeftContent2">
                  OpenSea is the world's first and largest NFT marketplace
                </div>
                <div className="LeftContent LeftContent3">
                  <Link to="/explore">
                    <button type="button" className="LeftContent3-1">
                      Explore
                    </button>
                  </Link>
                  <Link to="/create">
                    <button type="button" className="LeftContent3-2">
                      Create
                    </button>
                  </Link>
                </div>
                <div className="LeftContent LeftContent4">
                  <div>
                    <i className="fas fa-play-circle"></i>
                  </div>
                  <div className="LeftContent4-2">learn more about OpenSea</div>
                </div>
              </div>
            </div>
            <div className="homeInside homeInside2">
              <div className="homeInsideRightContent">
                <div className="homeInsideCard">
                  <article className="content">
                    <img
                      className="image"
                      src="https://lh3.googleusercontent.com/-mrglknzUSrn6SZhH0hZ3c14gyQgTSvcx1kAKimiNhChrlrsJHfd9KGbUmVlW4Ji5lWFVOUkF3-KxR5wDDe-7NB-JIWgXfSVg97o=s0"
                    />
                  </article>
                  <footer className="content2">
                    <div className="nameCard">
                      <img
                        className="boy"
                        src="https://lh3.googleusercontent.com/4a_5U42qB3mXxtGsp5Hmx0uXHiuciAAgNd-Yrz9vaAF6ZsiWdBrKJ5KF6q0nKyRfksgz8x_wOzGCBQAZKpyNb-fNgkeNfmlhqtO9r_I=s0"
                      />
                    </div>
                    <div className="nameCardCenter">
                      <div className="nameCardCenterContent1">Set me free</div>
                      <div className="nameCardCenterContent2">
                        AlbaInTheRainbow
                      </div>
                    </div>
                    <div className="nameCard">
                      <i className="fas fa-info-circle"></i>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
