import React, { useState, useEffect } from "react";
import NftList from "./NftList";

const Explore = ({ handleClicked }) => {
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    handleClicked(e);
  };

  // for test
  const itemData = [
    {
      image_url: "https://klayape.club/wp-content/uploads/2021/11/12.png",
      name: "Breakfast",
      id: "@bkristastucchio",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      image_url: "https://klayape.club/wp-content/uploads/2021/11/11.png",
      name: "Burger",
      id: "@rollelflex_graphy726",
    },
    {
      image_url: "https://klayape.club/wp-content/uploads/2021/11/13.png",
      name: "Camera",
      id: "@helloimnik",
    },
    {
      image_url: "https://klayape.club/wp-content/uploads/2021/11/14.png",
      name: "Coffee",
      id: "@nolanissac",
      cols: 2,
    },
    {
      image_url: "",
      name: "Hats",
      id: "@hjrc33",
      cols: 2,
    },
    {
      image_url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      name: "Honey",
      id: "@arwinneil",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      image_url: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      name: "Basketball",
      id: "@tjdragotta",
    },
    {
      image_url: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      name: "Fern",
      id: "@katie_wasserman",
    },
    {
      image_url: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      name: "Mushrooms",
      id: "@silverdalex",
      rows: 2,
      cols: 2,
    },
    {
      image_url: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      name: "Tomato basil",
      id: "@shelleypauls",
    },
    {
      image_url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      name: "Sea star",
      id: "@peterlaster",
    },
    {
      image_url: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      name: "Bike",
      id: "@southside_customs",
      cols: 2,
    },
  ];

  useEffect(() => {
    const options = { method: "GET", headers: { Accept: "application/json" } };

    const dataLoad = async () => {
      const dataList = await fetch(
        "https://api.opensea.io/api/v1/assets?order_direction=desc&limit=20",
        options
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));
      setData(dataList.assets);
    };
    dataLoad();
  }, []);

  return (
    <div className="explore-nftList-container">
      <NftList data={data} handleClick={handleClick}></NftList>
    </div>
  );
};

export default Explore;
