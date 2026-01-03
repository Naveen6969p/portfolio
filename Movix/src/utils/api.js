import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2U4YTQwNGIxZTYxYmYxMzdjZWZkNzNkOTk5ZTQzMSIsInN1YiI6IjY2NDVjM2JmNWMwNmUyYzY0MjNkNzA4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qbI78zklBYa6UWmy5xyj1F55uNs4lPxCzVsCvVPjDb4 "; 

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
