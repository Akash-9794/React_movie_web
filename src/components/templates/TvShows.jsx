import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utility/axios";
import TopNav from "./TopNav";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import DropDown from "./DropDown";
import Cards from "./Cards";
const TvShows = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tvshows, settvshows] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "App | Tv shows " + category.toUpperCase();

  const GetTvshows = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      //   console.log(data);
      //   setpopular(data.results);

      if (data.results.length > 0) {
        settvshows((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const refreshHandler = () => {
    if (tvshows.length === 0) {
      GetTvshows();
    } else {
      setpage(1);
      settvshows([]);
      GetTvshows();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tvshows.length > 0 ? (
    <div className=" py-1 h-screen w-screen bg-[#1F1E24]  ">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className=" hover:text-[#6556CD] cursor-pointer pr-2  ri-arrow-left-circle-line"
          ></i>
          Tvshows <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-4/5">
          <TopNav />
          <DropDown
            title="category"
            options={["on_the_air","popular","top_rated","airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-4"></div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={tvshows.length}
        next={GetTvshows}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tvshows} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;
