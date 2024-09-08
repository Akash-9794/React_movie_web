import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Trending from "./components/templates/Trending";
import Popular from "./components/templates/Popular";
import Movies from "./components/templates/Movies";
import TvShows from "./components/templates/TvShows";
import People from "./components/templates/People";
import MovieDetails from "./components/templates/movieDetails";
import PeopleDetails from "./components/templates/peopleDetails";
import TvDetails from "./components/templates/tvDetails";
import Trailer from "./components/templates/Trailer";
import NotFound from "./components/templates/NotFound";
function App() {
  return (
    <>
      <div className="bg-[#1F1E24] w-screen h-screen flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/details/:id" element={<MovieDetails />} />
          <Route path="/movie/details/:id/trailer" element={<Trailer/>} />         

          <Route path="/tv" element={<TvShows />} />
          <Route path="/tv/details/:id" element={<TvDetails />} >
          <Route path="/tv/details/:id/trailer" element={<Trailer/>} />
          </Route>
          <Route path="/person" element={<People />} />
          <Route path="/person/details/:id" element={<PeopleDetails />} />
          <Route path="*" element={<NotFound/>} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
