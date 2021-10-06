import React from "react";

export default function Anime(props) {
  const anime = props.info;
  return (
    <div className="animeBlocks">
      <div>
        <img src={anime.img} />
        <h1>{anime.name}</h1>
        <p>{anime.episodes} Episodes</p>
      </div>
    </div>
  );
}
