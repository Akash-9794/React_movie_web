import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import DropDown from "./DropDown";
import axios from "../utility/axios";
import Cards from "./Cards";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "Movie |App | Trending "+category.toUpperCase()

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      //   settrending(data.results);

      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const refreshHandler =  () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending()
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);
  console.log(trending.map((e,idx)=>e.popularity))

  return trending.length > 0 ? (
    <div className=" py-1 h-screen w-screen bg-[#1F1E24]  ">
      <div className="w-full md:h-[10%] h-20% md:flex items-center justify-between p-5 fixed top-0 bg-[linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.6),rgba(0,0,0,.8))] z-50">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className=" hover:text-[#6556CD] cursor-pointer pr-2  ri-arrow-left-circle-line"
          ></i>
          Trending
        </h1>
          <TopNav />
        <div className="flex items-center md:w-4/5 w-11/12">
          <DropDown
            title="category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-4"></div>
          <DropDown
            title="duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>
      <div className="h-[90%] overflow-auto">
      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title="tv" />
      </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
