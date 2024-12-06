import React, { useEffect } from "react";
import MovieApi from "../common/MovieApi";
import { APIkey } from "../common/MovieApiKey";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import MovieListing from "./MovieListing";
import { setMovies } from "../featuresRedux/Actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const movieText = "Harry"; // You can modify the movieText for testing.

    const fetchMovies = async () => {
      try {
        const response = await MovieApi.get(
          `?apikey=${APIkey}&s=${movieText}&type=movie`
        );
        console.log("API Response:", response.data); // Log the response to see if the data is coming in
        if (response.data && response.data.Search) {
          dispatch(setMovies(response.data.Search)); // Dispatch the movie data
        } else {
          console.log("No movies found.");
        }
      } catch (err) {
        console.log("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <Box>
      <MovieListing />
    </Box>
  );
};

export default Home;
