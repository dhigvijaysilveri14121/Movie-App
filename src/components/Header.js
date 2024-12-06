import { Box, IconButton, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "../App.css";
import { Link } from "react-router-dom";
import MovieApi from "../common/MovieApi";
import { APIkey } from "../common/MovieApiKey";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const movieText='Harry'
    const fetchMovie = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIkey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("err:", err);
      });
      console.log("the response from Api ", response);
    };
    fetchMovie();
  },[]);

  return (
    <Box className="header-container">
      <Link to="/">
        <Typography variant="h6" fontWeight="bold" className="app-logo">
          Dhigvijay Movie App
        </Typography>
      </Link>
      <IconButton className="login-btn">
        <PersonIcon />
      </IconButton>
    </Box>
  );
};

export default Header;
