import { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "./utility/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import DropDown from "./templates/DropDown";

const Home = () => {
  document.title = "Movie | WebApp";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randondata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randondata);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      setTrending(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);


  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-x-hidden overflow-y-auto ">
        <TopNav />
        <Header data={wallpaper} />
        <div className="mb-3 flex justify-between m-4">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <DropDown
            title="filter" options={["tv", "movie", "all"]}
            func={(e)=>setCategory(e.target.value)}
          />

        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
