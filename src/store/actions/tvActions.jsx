export { removetv } from "../reducers/tvSlice";
import axios from "../../components/utility/axios.jsx";
import { loadtv } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recomandations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const vedios = await axios.get(`/tv/${id}/videos`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
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
    dispatch(loadtv(theUltimateDetails));
    console.log(theUltimateDetails);
  } catch (error) {
    console.log(" Error : ", error);
  }
};
