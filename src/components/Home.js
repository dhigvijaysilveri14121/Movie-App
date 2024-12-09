import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieListing from "./MovieListing";
import MovieApi from "../common/MovieApi";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMoviees = async () => {
      try {
        const response = await MovieApi.get(`?apikey={APIkey}`);
        setMovies(response.data);
        console.log(setMovies)
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchMoviees();
  }, []);
  return (
    <Box>
      <MovieListing movies={movies}/>
    </Box>
  );
};

export default Home;
