import "./App.css";
import Home from "./components/Home";
import MovieRow from "./components/MovieRow";
import movieData from "./MovieArray";

function App() {
  return (
    <div className="App">
      <Home />
      <MovieRow movie={movieData} />
    </div>
  );
}

export default App;
