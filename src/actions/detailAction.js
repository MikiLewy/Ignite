import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "api";

export const loadDetail = (id) => async (dispatch) => {
  const gameDetail = await axios.get(gameDetailsURL(id));
  const screenshot = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: gameDetail.data,
      screen: screenshot.data,
    },
  });
};
