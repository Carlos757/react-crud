import PropTypes from "prop-types";
import { Typography, Toolbar, AppBar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const TopBar = ({ title, handleSidebar }) => {
  return (
    <AppBar position="fixed" sx={{ width: "100%", zIndex: 100000 }}>
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
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  title: PropTypes.string,
  handleSidebar: PropTypes.func,
};

export default TopBar;
