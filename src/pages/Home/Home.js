import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "actions/gamesAction";
import Game from "components/Game/Game";
import { GameList, Games } from "./Home.styles";
import { GameDetail } from "components/GameDetail/GameDetail";
import { useLocation } from "react-router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { newGames, popular, searched, upcoming } = useSelector(
    (state) => state.games
  );
  const { pathname } = useLocation();
  const pathID = pathname.split("/")[2];

  return (
    <GameList>
      <AnimateSharedLayout>
        <AnimatePresence type="crossfade">
          {pathID && <GameDetail pathID={pathID} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Results</h2>
            <Games>
              {searched.map(({ name, released, id, background_image }) => (
                <Game
                  key={id}
                  name={name}
                  released={released}
                  id={id}
                  bgi={background_image}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}

        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map(({ name, released, id, background_image }) => (
            <Game
              key={id}
              name={name}
              released={released}
              id={id}
              bgi={background_image}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map(({ name, released, id, background_image }) => (
            <Game
              key={id}
              name={name}
              released={released}
              id={id}
              bgi={background_image}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map(({ name, released, id, background_image }) => (
            <Game
              key={id}
              name={name}
              released={released}
              id={id}
              bgi={background_image}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

export default Home;
