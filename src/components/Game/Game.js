import React from "react";
import { Wrapper } from "components/Game/Game.styles";
import { useDispatch } from "react-redux";
import { loadDetail } from "actions/detailAction";
import { Link } from "react-router-dom";

const Game = ({ name, released, id, bgi }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <Wrapper onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={bgi} alt={name} />
      </Link>
    </Wrapper>
  );
};

export default Game;
