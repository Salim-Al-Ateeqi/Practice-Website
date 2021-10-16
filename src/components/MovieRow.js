import React from "react";
import Movie from "./Movie";
import SearchBar from "./SearchBar";

export default function MovieRow(props) {
  let movieArray = props.movie.map((element) => <Movie info={element} />);

  return <div className="movieRows">{movieArray}</div>;
}
