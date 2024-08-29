import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-5">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>Movie | App</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-base gap-2">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5 ">
          New Feeds
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-fire-fill"></i>Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-bard-fill"></i>Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          {" "}
          <i className="mr-3 ri-movie-2-fill"></i>Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-tv-2-fill"></i>TV Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          {" "}
          <i className="mr-3 ri-team-fill"></i>People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-3" />
      <nav className="flex flex-col text-zinc-400 text-base gap-1">
        <h1 className="text-white font-semibold text-xl mt-5 mb-5 ">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-information-fill"></i>About Us
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-phone-fill"></i>Contact US
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
