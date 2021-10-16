import React from "react";

export default function Movie(props) {
  const movie = props.info;
  return (
    <div className="movieBlocks">
      <div>
        <img src={movie.img} />
        <h1>{movie.name}</h1>
        <p>Run Time: {movie.runTime}</p>
      </div>
    </div>
  );
}
