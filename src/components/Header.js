import { Box, IconButton, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "../App.css";
import { Link } from "react-router-dom";


const Header = () => {
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
