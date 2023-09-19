import { useState } from "react";
import PropTypes from "prop-types";

// MUI
import {
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Container,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

// Components
import TopBar from "../TopBar";

// Styled components
import { Content, LinkRouter, SideBar } from "./styledComponents";

const Drawer = ({ modules, routes }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <Container>
      <TopBar
        title="Simple CRUD"
        handleSidebar={() =>
          modules.length && setSidebarVisible(!sidebarVisible)
        }
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
              module.status === "1" && (
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
      <Content>
        <Toolbar />
        {routes}
      </Content>
    </Container>
  );
};

Drawer.propTypes = {
  modules: PropTypes.array,
  routes: PropTypes.object,
};

export default Drawer;
