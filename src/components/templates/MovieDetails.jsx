import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../../store/actions/movieActions";
import Loading from "../Loading";
import HorizontalCards from "./HorizontalCards";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);
  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,1,.2),rgba(0,0,0,.6),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="text-white w-screen relative h-auto  overflow-x-hidden  "
    >
      {/* part 1 navigation */}
      <nav className="w-full flex gap-8 md:px-28 px-7 text-xl h-[7vh] fixed top-0 items-center bg-[linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.6),rgba(0,0,0,.8))] ">
        <Link
          onClick={() => navigate(-1)}
          className=" hover:text-[#6556CD] cursor-pointer pr-2  ri-arrow-left-circle-line"
        ></Link>
        <a target="_blank" href={`info.detail.homepage`}>
          <i className="ri-external-link-fill hover:text-[#6556CD] cursor-pointer"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill hover:text-[#6556CD] cursor-pointer"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
          className="hover:text-[#6556CD] cursor-pointer"
        >
          IMDB
        </a>
      </nav>

      {/* part 2 poster & Details */}

      <div className="w-full md:px-28  p-7 py-5 md:flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]    md:h-[60vh] object-cover rounded "
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        <div className="content ml-[5%] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] ">
          <h1 className="md:text-5xl relative text-5xl mt-5 font-black text-white  md:flex ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-2xl  font-bold text-zinc-200">
              ({info.detail.release_date.split("-")[0]})
            </small>
            <br className="break"/>
            <Link
              className="md:text-base text-sm p-2  hover:bg-[#5665AA] bg-[#5665CD] md:px-10 py-4 rounded-lg  md:ml-8  "
              to={`${pathname}/trailer`}
            > <i className="mr-2  ri-play-fill"></i>
              Play Trailer
            </Link>
          </h1>
          <div className=" md:mt-3 mt-9 mb-5 md:flex text-white items-center md:gap-x-3 gap-10">
            <span className="w-[5vh] h-[5vh] text-lg font-semibold rounded-full  bg-yellow-500 text-white flex  justify-center items-center  ">
              {(info.detail.vote_average * 10).toFixed()}{" "}
              <sup className="mt-3">%</sup>
            </span>
            <h1 className="md:w-[60px] text-2xl font-semibold leading-6">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>
          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>
          <h1 className="text-xl font-semibold mb-3 mt-5 text-zinc-200">
            Overview
          </h1>
          <p className="text-zinc-300">{info.detail.overview}</p>

          <h1 className="text-xl font-semibold mb-3 mt-5 text-zinc-200">
            Movie Translated
          </h1>
          <p className="text-zinc-300 w-full">{info.translations.join(" ")}</p>
        </div>
      </div>

      {/*  part 3  available on plateform  */}
      <div className="w-5/6  md:px-28 px-8 ">
        <div className="part3 mt-5 gap-5 p-2 flex flex-col  ">
          {info.watchproviders && info.watchproviders.flatrate ? (
            <div className="flex md:gap-x-10 gap-x-4 items-center text-white">
              <h1>Avilable on Platform</h1>
              {info.watchproviders.flatrate.map((w, idx) => (
                <img
                  title={w.provider_name}
                  className="h-[5vh] w-[5vh] object-cover rounded-lg hover:scale-100 cursor-pointer"
                  key={idx}
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          ) : (
            <h1>Available on Platform</h1>
          )}

          {info.watchproviders && info.watchproviders.rent ? (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Avilable on Rent</h1>
              {info.watchproviders.rent.map((w, idx) => (
                <img
                  title={w.provider_name}
                  className="h-[5vh] w-[5vh] object-cover rounded-lg hover:scale-100 cursor-pointer"
                  key={idx}
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          ) : (
            <h1>Available on Rent</h1>
          )}

          {info.watchproviders && info.watchproviders.buy ? (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Avilable on Buy</h1>
              {info.watchproviders.buy.map((w, idx) => (
                <img
                  title={w.provider_name}
                  className="h-[5vh] w-[5vh] object-cover rounded-lg hover:scale-100 cursor-pointer"
                  key={idx}
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          ) : (
            <h1>Available on Buy</h1>
          )}
        </div>
      </div>

      {/* part 4 recomendation  */}
      <h1 className="md:px-28 px-10 text-2xl font-semibold ">Recommendations & Similar Stuff</h1>
      <div className="md:px-28">
      <HorizontalCards 
          data={info.recommendations.length > 0 ? info.recommendations : info.similar }
      />
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
