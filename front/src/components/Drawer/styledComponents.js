import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const SideBar = styled(Drawer)(({ width }) => ({
  width,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width,
    boxSizing: "border-box",
  },
}));

export const LinkRouter = styled(Link)(() => ({
  textDecoration: "none",
  color: "black"
}));


