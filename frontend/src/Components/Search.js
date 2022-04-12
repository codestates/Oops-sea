// import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const Search = () => {
  const handleClick = () => {
    document.getElementById("what-user-search").value = "";
  };

  return (
    <div class="Blockreact searchContainer">
      <SearchIcon />
      <input
        type="text"
        id="what-user-search"
        class="form-control input-lg"
        placeholder="NFT, 컬렉션, 계정을 검색하세요"
      />
      <ClearIcon />
    </div>
  );
};

export default Search;
