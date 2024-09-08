import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  console.log(title);
  console.log(data);
  return (
    <div className="flex flex-wrap w-full   pt-5 p-3 justify-center   bg-[#1F1E24] ">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} className="md:w-[30vh] w-[40vh]  relative m-2 " key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] flex md:h-[50vh] object-cover rounded"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path}`}
            alt="Similar Image"
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold ">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          {c.vote_average && (
            <div className=" absolute object-contain p-2  bottom-28 -right-2 h-[7vh] w-[7vh] text-xl font-semibold rounded-full  bg-yellow-600 text-white flex  justify-center items-center  ">
              {(c.vote_average * 10).toFixed()} <sup className="mt-3">%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
