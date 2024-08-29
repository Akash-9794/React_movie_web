const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-6 p-4">
      {data.map((d, i) => (
        <div
          key={i}
          className="min-w-[18%] bg-ziinc-900 mr-5 bg-zinc-800 overflow-y-auto rounded-lg mb-4 "
        >
          <img
            className="w-full h-[55%] object-cover mb-2 rounded "
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.profile_path
            }`}
            alt=""
          />
          <div className="text-white text-start h-[45%]  p-2">
            <h1 className="text-base font-semibold   ">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="text-zinc-200 text-sm pt-3 ">
              {d.overview.slice(0, 50)}...
              <span className="text-blue-400"> more</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
