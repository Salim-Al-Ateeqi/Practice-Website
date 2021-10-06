import React from "react";
import Anime from "./Anime";
import SearchBar from "./SearchBar";

export default function AnimeRow(props) {
  let animeArray = props.anime.map((element) => <Anime info={element} />);

  return <div className="animeRows">{animeArray}</div>;
}
