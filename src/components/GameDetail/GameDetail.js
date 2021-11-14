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

export const GameDetail = () => {
  const { screen, game } = useSelector((state) => state.detail);
  return (
    <CardShadow>
      <Detail>
        <Stats className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={game.background_image} alt={game.background_image} />
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
  );
};
