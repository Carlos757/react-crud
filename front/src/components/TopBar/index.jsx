import PropTypes from "prop-types";

// MUI
import { Typography, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// StyleComponents
import { AppBar } from "./styledComponents";

const TopBar = ({ title, handleSidebar }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  title: PropTypes.string,
  handleSidebar: PropTypes.func,
};

export default TopBar;
