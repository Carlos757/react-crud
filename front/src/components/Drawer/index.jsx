import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Container,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Link } from "react-router-dom";
import TopBar from "../TopBar";

// Styled components
import { LinkRouter, SideBar } from "./styledComponents";

const Drawer = ({ modules, routes }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <Container>
      <TopBar
        title="Simple CRUD"
        handleSidebar={() => setSidebarVisible(!sidebarVisible)}
      />
      <SideBar
        variant="temporary"
        open={sidebarVisible}
        anchor="left"
        width={240}
        onClose={() => setSidebarVisible(false)}
      >
        <Toolbar />
        <List>
          {modules.map(
            (module, index) =>
              module.status && (
                <LinkRouter
                  key={`link-${index}`}
                  to={module.route}
                  onClick={() => setSidebarVisible(false)}
                >
                  <ListItem key={`module-${index}`} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <RadioButtonUncheckedIcon />
                      </ListItemIcon>
                      <ListItemText primary={module.name} />
                    </ListItemButton>
                  </ListItem>
                </LinkRouter>
              )
          )}
        </List>
      </SideBar>
      <Box sx={{ p: 2 }}>
        <Toolbar />
        {routes}
      </Box>
    </Container>
  );
};

export default Drawer;
