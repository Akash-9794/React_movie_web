import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full justify-center  bg-[#1F1E24] ">
      {data.map((c, i) => (
        <Link className="w-[30vh]  m-2 " key={i}>
          <img 
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[50vh] object-cover rounded"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
          {c.name || c.title || c.original_name || c.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
