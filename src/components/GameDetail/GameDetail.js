import React from "react";
import { useSelector } from "react-redux";
import {
  CardShadow,
  Detail,
  Info,
  Stats,
  Platforms,
  Media,
  Description,
} from "./GameDetail.styles";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { iconHandler, getStarsHandler } from "handlers/iconHandler";

export const GameDetail = ({ pathID }) => {
  const navigate = useNavigate();
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  return (
    <>
      {!isLoading && (
        <CardShadow onClick={exitDetailHandler} className="shadow">
          <Detail layoutId={pathID}>
            <Stats className="stats">
              <div className="rating">
                <motion.h3 layout={`title ${pathID}`}>{game.name}</motion.h3>
                <p>
                  Rating: {game.rating}
                  <div>{getStarsHandler(game)}</div>
                </p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={iconHandler(data.platform.name)}
                      alt={data.platform.id}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layout={`image ${pathID}`}
                src={game.background_image}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img key={screen.id} src={screen.image} alt={screen.image} />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};
