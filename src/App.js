import "./App.css";
import Home from "./components/Home";
import AnimeRow from "./components/AnimeRow";
import animeData from "./AnimeArray";

function App() {
  return (
    <div className="App">
      <Home />
      <AnimeRow anime={animeData} />
    </div>
  );
}

export default App;
