import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.6),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: " 15%",
        backgroundSize: "cover",
      }}
      className="w-full h-[55vh] flex flex-col justify-end p-[3%] overflow-y-auto items-start"
    >
      <h1 className="md:w-[70%] w-[90%] md:text-5xl text-3xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="md:w-[70%] w-[90%] mt-3 text-white mb-3">
        {(data.overview ? data.overview.slice(0, 100) : "No overview available")}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">
          more
        </Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-400 ri-megaphone-fill"></i>{" "}
        {data.release_date || "No Information"}
        <i className="ml-5 text-yellow-400 ri-album-fill"></i>{" "}
        {data.media_type ? data.media_type.toUpperCase() : "UNKNOWN"}
      </p>
      <Link 
        to={`/${data.media_type}/trailer/${data.id}`} 
        className="mt-5 bg-[#6556CD] p-2 rounded text-white"
      >
        WATCH Trailer
      </Link>
    </div>
  );
};

export default Header;
