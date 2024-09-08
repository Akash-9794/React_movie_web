import axios from "../utility/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearchs = async () => {
    if (!query.trim()) {
      setSearches([]);
      return;
    }

    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results || []);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    GetSearchs();
  }, [query]);

  return (
    <div className="w-full h-16 relative flex mt-1 justify-center  items-center fixed top-0 z-50 ">
      <i className="text-zinc-400 md:text-2xl text-lg ri-search-2-line "></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-1/2 text-zinc-200 md:mx-10 mx-4  md:p-2 p-1 md:px-7 px-3 md:text-xl text-base outline-none rounded-full border-zinc-400 hover:border-[1px] bg-transparent decoration-none"
        spellCheck="false"
        type="text"
        placeholder="Search Something"
      />

      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 text-3xl cursor-pointer ri-close-fill"
        ></i>
      )}

      <div className=" z-50 absolute md:w-1/2 max-h-[50vh] top-[115%] rounded bg-zinc-200 overflow-auto">
        {searches &&
          searches.map((s, i) => (
            <Link
              to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full md:p-5 p-1 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
                className="md:h-20 h-10 md:w-20 w-10 object-cover md:ml-4 ml-1 md:mr-5 mr-2 shadow-2xl rounded "
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : noimage
                }
                alt=""
              />
              <span>
                {s.name || s.title || s.original_name || s.original_title}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TopNav;
