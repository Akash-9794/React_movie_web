export { removemovie } from "../reducers/movieSlice";
import axios from "../../components/utility/axios.jsx";
import { loadmovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recomandations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const vedios = await axios.get(`/movie/${id}/videos`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    let theUltimateDetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recomandations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
      videos: vedios.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN
        ? watchproviders.data.results.IN
        : watchproviders.data.results.US,
    };
    dispatch(loadmovie(theUltimateDetails));
    console.log(theUltimateDetails);
  } catch (error) {
    console.log(" Error : ", error);
  }
};
