import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  
  // Accessing the Redux state with a fallback to avoid null errors
  const youtubeVideos = useSelector((state) => state[category]?.info?.videos || []);

  // Handle cases where youtubeVideos is null or empty
  const videoKey = youtubeVideos.length > 0 ? youtubeVideos[0]?.key : null;

  // Conditional rendering to handle missing or loading data
  if (!videoKey) {
    return (
      <div className="absolute w-screen h-screen top-0 left-0 z-50 bg-[rgba(0,0,0,.7)] flex items-center justify-center text-white">
        <h1 className="text-white text-4xl">No Trailer Available</h1>
        <i
          onClick={() => navigate(-1)}
          className="absolute text-3xl top-10 right-5 hover:text-[#6556CD] cursor-pointer ri-close-fill"
        ></i>
      </div>
    );
  }

  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-50 bg-[rgba(0,0,0,.7)] flex items-center justify-center text-white">
      <i
        onClick={() => navigate(-1)}
        className="absolute text-3xl top-10 right-5 hover:text-[#6556CD] cursor-pointer ri-close-fill"
      ></i>

      <ReactPlayer
        height={500}
        width={1100}
        url={`https://www.youtube.com/watch?v=${videoKey}`}
      />
    </div>
  );
};

export default Trailer;
