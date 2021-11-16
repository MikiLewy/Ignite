import React from "react";
import { Wrapper } from "components/Game/Game.styles";
import { useDispatch } from "react-redux";
import { loadDetail } from "actions/detailAction";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Game = ({ name, released, id, bgi }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <Wrapper layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layout={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img layout={`image ${stringPathId}`} src={bgi} alt={name} />
      </Link>
    </Wrapper>
  );
};

export default Game;
