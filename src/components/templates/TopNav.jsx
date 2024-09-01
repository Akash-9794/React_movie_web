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
    <div className="w-full h-16 relative flex mt-1 justify-center items-center">
      <i className="text-zinc-400 text-2xl ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-1/2 text-zinc-200 mx-10 p-2 px-7 text-xl outline-none rounded-full border-zinc-400 hover:border-[1px] bg-transparent decoration-none"
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

      <div className="absolute w-1/2 max-h-[50vh] top-[115%] rounded bg-zinc-200 overflow-auto">
        {searches &&
          searches.map((s, i) => (
            <Link
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full p-7 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
                className="h-20 w-20 object-cover ml-4 mr-5 shadow-2xl rounded "
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
