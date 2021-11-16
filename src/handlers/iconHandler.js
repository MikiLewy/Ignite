import playstation from "assets/img/playstation.svg";
import gamepad from "assets/img/gamepad.svg";
import nintendo from "assets/img/nintendo.svg";
import apple from "assets/img/apple.svg";
import steam from "assets/img/steam.svg";
import xbox from "assets/img/xbox.svg";
import starEmpty from "assets/img/star-empty.png";
import starFull from "assets/img/star-full.png";
export const iconHandler = (name) => {
  switch (name) {
    case "PlayStation 4":
      return playstation;
    case "Xbox Series S/X":
      return xbox;
    case "PC":
      return steam;
    case "Nintendo Switch":
      return nintendo;
    case "iOS":
      return apple;
    default:
      return gamepad;
  }
};

export const getStarsHandler = (game) => {
  const stars = [];
  const rating = Math.floor(game.rating);
  console.log(rating);
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img alt="star" key={i} src={starFull} />);
    } else {
      stars.push(<img alt="star" key={i} src={starEmpty} />);
    }
  }
  return stars;
};
