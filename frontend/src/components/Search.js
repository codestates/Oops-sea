import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import ToggleButton from "@mui/material/ToggleButton";
import ClearIcon from "@mui/icons-material/Clear";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onReset = () => {
    setSearchInput("");
  };

  return (
    <div className="Blockreact searchContainer">
      <SearchIcon />
      <input
        type="text"
        id="what-user-search"
        className="form-control input-lg"
        placeholder="NFT, 컬렉션, 계정을 검색하세요"
        onChange={onChange}
        value={searchInput}
      />
      <ToggleButton
        onClick={() => {
          onReset();
        }}
        value
      >
        <ClearIcon />
      </ToggleButton>
    </div>
  );
};

export default Search;