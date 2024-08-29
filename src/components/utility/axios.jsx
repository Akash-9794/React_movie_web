import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmEyMmQ4MTYyZWJkNzlkN2I2ZmJhZTNjMmJhOWUwOCIsIm5iZiI6MTcyNDgzODk1My45OTY3NzgsInN1YiI6IjY2Y2VlMjljNmVhNDk0MTQzN2EwYTI3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PIxTt8HiUN9xhvV1GurwBdnjDrOGl01uWwgO_Ip_5yM'
      },
});

export default instance;