import React, { useState } from "react";
import logo from "assets/img/logo.svg";
import { Logo, StyledNav } from "./Nav.styles";
import { fetchSearch } from "actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [searchGame, setSearchGame] = useState("");
  const inputHandler = (e) => {
    setSearchGame(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(searchGame));
    setSearchGame("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input value={searchGame} onChange={inputHandler} type="text" />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

export default Nav;
