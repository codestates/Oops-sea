import React, { useState, useEffect } from "react";
import NftList from "./NftList";

const Explore = ({ handleClicked }) => {
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    handleClicked(e);
  };

  useEffect(() => {

    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    const dataLoad = async () => {
      const dataList = await fetch(
        'https://api.opensea.io/api/v1/assets?order_direction=desc&limit=20',
        options
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));
      setData(dataList.assets);
    };
    dataLoad();
    // console.log(data);
  }, []);

    return (
        <div className="explore-nftList-container">
            <NftList data={data} handleClick={handleClick}></NftList>
        </div>
    );
};

export default Explore;