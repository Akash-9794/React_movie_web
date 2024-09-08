import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utility/axios";
import TopNav from "./TopNav";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import DropDown from "./DropDown";
import Cards from "./Cards";
const Movies = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovies] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "App | Popular " + category.toUpperCase();

  const GetMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      //   console.log(data);
      //   setpopular(data.results);

      if (data.results.length > 0) {
        setmovies((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const refreshHandler = () => {
    if (movie.length === 0) {
      GetMovies();
    } else {
      setpage(1);
      setmovies([]);
      GetMovies();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className=" py-1 h-screen w-screen bg-[#1F1E24]  ">
      <div className="w-full fixed top-0 z-50  md:h-[10%] h-[15%] md:flex items-center px-5 justify-between bg-[linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.6),rgba(0,0,0,.8))]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className=" hover:text-[#6556CD]  cursor-pointer pr-2  ri-arrow-left-circle-line"
          ></i>
          Movies <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-4/5">
          <TopNav />
          <DropDown
            title="category"
            options={["popular","top_rated","upcoming","now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-4"></div>
        </div>
      </div>
      <div className="h-[90%] overflow-auto">
      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovies}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
