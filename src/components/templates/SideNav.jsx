import { Link } from "react-router-dom";


const SideNav = () => {
  return (
    <div className="md:w-[20%] w-2/6 appearance-auto h-full border-r-2 border-zinc-400 md:p-5 p-2">
      <h1 className="md-text-2xl text-lg text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <br className="break"/>
        <span>Movie | App</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-base gap-2">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5 ">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg md:p-3 p-1">
          <i className="mr-3 ri-fire-fill"></i>Trending
        </Link>
        <Link to='/popular' className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg md:p-3 p-1">
          <i className="mr-3 ri-bard-fill"></i>Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg md:p-3 p-1">
          {" "}
          <i className="mr-3 ri-movie-2-fill"></i>Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg md:p-3 p-1">
          <i className="mr-3 ri-tv-2-fill"></i>TV Shows
        </Link>
        <Link to="person" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg md:p-3 p-1">
          {" "}
          <i className="mr-3 ri-team-fill"></i>People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-3" />
      <nav className="flex flex-col text-zinc-400 text-base gap-1">
        <h1 className="text-white font-semibold text-xl mt-5 mb-5 ">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg md:p-3 p-1">
          <i className="mr-3 ri-information-fill"></i>About Us
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg md:p-3 ">
          <i className="mr-3 ri-phone-fill"></i>Contact US
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
